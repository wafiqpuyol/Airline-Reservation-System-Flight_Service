const { Sequelize } = require('sequelize')
const { Flight } = require('../models')
const db = require('../models')
const { Airplane } = require('../models')
const { Airport } = require('../models')
const { Airline } = require('../models')
const CrudRepository = require('./crud-repository')


class FlightRepository extends CrudRepository {
    constructor() {
        super(Flight)
    }

    async getFlight(filter) {
        const query = Flight.findAll({
            where: filter,
            include: [
                {
                    model: Airplane,
                    as: "AirplaneDetail",
                    required: true
                },
                {
                    model: Airline,
                    as: "Airline",
                    required: true
                },
                {
                    model: Airport,
                    as: "DepartureAirport",
                    on: {
                        col1: Sequelize.where
                            (Sequelize.col('Flight.departureAirportCode'), "=", Sequelize.col('DepartureAirport.iataCode')),
                    },
                },
                {
                    model: Airport,
                    as: "ArrivalAirport",
                    on: {
                        col1: Sequelize.where
                            (Sequelize.col('Flight.arrivalAirportCode'), "=", Sequelize.col('ArrivalAirport.iataCode')),
                    },
                }
            ]
        })
        return query;
    }

    async getFlightById(id) {
        const query = Flight.findByPk(id, {
            include: [
                {
                    model: Airplane,
                    as: "AirplaneDetail",
                    required: true
                },
                {
                    model: Airline,
                    as: "Airline",
                    required: true
                },
                {
                    model: Airport,
                    as: "DepartureAirport",
                    on: {
                        col1: Sequelize.where
                            (Sequelize.col('Flight.departureAirportCode'), "=", Sequelize.col('DepartureAirport.iataCode')),
                    },
                },
                {
                    model: Airport,
                    as: "ArrivalAirport",
                    on: {
                        col1: Sequelize.where
                            (Sequelize.col('Flight.arrivalAirportCode'), "=", Sequelize.col('ArrivalAirport.iataCode')),
                    },
                }
            ]
        })
        return query;
    }

    async updateRemainingSeat(id, noOfSeats, dec = true) {
        await db.sequelize.query(`SELECT * FROM FLIGHTS WHERE ID = ${id} FOR UPDATE`);
        const flight = await Flight.findByPk(id);
        if (Number(dec)) {
            await flight.decrement('total_seats', { by: noOfSeats })
        } else {
            await flight.increment('total_seats', { by: noOfSeats })
        }
        await flight.reload();
        return flight;
    }
}

module.exports = FlightRepository;