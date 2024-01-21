const { Sequelize } = require('sequelize')
const { Flight } = require('../models')
const db = require('../models')
const { Airplane } = require('../models')
const { Airport } = require('../models')
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
                    as: "airplane_details",
                    required: true
                },
                {
                    model: Airport,
                    as: "DepartureAirport",
                    on: {
                        col1: Sequelize.where
                            (Sequelize.col('Flight.departure_airport_id'), "=", Sequelize.col('DepartureAirport.code')),
                    },
                },
                {
                    model: Airport,
                    as: "ArrivalAirport",
                    on: {
                        col1: Sequelize.where
                            (Sequelize.col('Flight.arrival_airport_id'), "=", Sequelize.col('ArrivalAirport.code')),
                    },
                }
            ]
        })
        return query;
    }

    async updateSeat(id, noOfSeat, dec = true) {
        await db.sequelize.query(`SELECT * FROM FLIGHTS WHERE ID = ${id} FOR UPDATE`)
        const flight = await Flight.findByPk(id);
        if (Number(dec)) {
            await flight.decrement('total_seats', { by: noOfSeat })
        } else {
            await flight.increment('total_seats', { by: noOfSeat })
        }
        await flight.reload();
        return flight;
    }
}

module.exports = FlightRepository;