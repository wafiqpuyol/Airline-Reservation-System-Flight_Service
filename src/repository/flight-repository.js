const { Op } = require('sequelize')
const { Flight } = require('../models')
const { Airplane } = require('../models')
const { Airport } = require('../models')
const CrudRepository = require('./crud-repository')


class FlightRepository extends CrudRepository {
    constructor() {
        super(Flight)
    }

    async getFlight(filter) {
        console.log(filter);
        const query = Flight.findAll({
            // where: filter,
            // include: [{ model: Airport }, Airplane]
            include: { all: true, }
        })
        return query;
    }

    // async getFlightOfDepartureTime(time) {
    //     const query = await Flight.findAll({
    //         where: {

    //         }

    //     })
    //     console.log(query);
    //     return query
    // }
}

module.exports = FlightRepository;