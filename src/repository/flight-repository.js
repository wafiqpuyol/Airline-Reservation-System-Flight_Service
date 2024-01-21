const { Op, Sequelize } = require('sequelize')
const { Flight } = require('../models')
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
}

module.exports = FlightRepository;