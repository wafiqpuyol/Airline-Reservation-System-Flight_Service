const { Sequelize, Op } = require('sequelize')
const db = require('../models')


const CrudRepository = require('./crud-repository')
const { Flight } = require('../models')
const { Airplane } = require('../models')
const { Airport } = require('../models')
const { Airline } = require('../models')
const { Seat } = require('../models')
const { flightRowLock, seatRowLock } = require('../utils/common/queries')

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

    async getAllSeats(airplaneId) {
        const query = await Seat.findAll(
            {
                where: {
                    airplaneId: airplaneId
                }
            }
        )
        return query;
    }

    async updateSeatDB(data) {
        const { seatAvailability, airplaneId, seatNumber } = data;
        // lock individual row 
        seatNumber.forEach(async (number) => await db.sequelize.query(seatRowLock(airplaneId, number)))
        const query = await Seat.update({ seatAvailability: seatAvailability },
            {
                where: {
                    airplaneId: airplaneId,
                    number: {
                        [Op.in]: seatNumber
                    }
                }
            }
        )
        return query;
    }

    async updateRemainingSeat(id, noOfSeats, dec = true) {
        // add row lock
        await db.sequelize.query(flightRowLock(id));

        const flight = await Flight.findByPk(id);
        if (Number(dec)) {
            await flight.decrement('totalSeats', { by: noOfSeats })
        } else {
            await flight.increment('totalSeats', { by: noOfSeats })
        }
        await flight.reload();

        return flight;
    }
}

module.exports = FlightRepository;