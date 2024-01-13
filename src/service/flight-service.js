const { Op } = require("sequelize");
const { FlightRepository } = require('../repository')
const errorGenerator = require('../utils/error/error-generator');
const utcTime = require("../utils/helper/utcTime");



const flightRepository = new FlightRepository();

class FlightService {

    async createFlight(data) {
        try {
            const query = await flightRepository.create({ ...data });
            return query;
        } catch (error) {
            throw errorGenerator(error)
        }
    }

    async getAllFlight(query) {
        let customFilters = {};

        if (query.trips) {
            const [departure_airport_id, arrival_airport_id] = query.trips.split('-');
            customFilters = {
                [Op.and]: [
                    { departure_airport_id },
                    { arrival_airport_id },
                ]
            }
        }

        if (query.price) {
            const [minPrice, maxPrice] = query.price.split('-');
            customFilters.price = {
                [Op.between]: [minPrice, maxPrice]
            }
        }

        if (query.time) {
            customFilters.departure_time = {
                [Op.eq]: query.time
            }
        }

        try {
            const flight = await flightRepository.getFlight(customFilters)
            return flight;
        } catch (error) {
            console.log(error);
            throw errorGenerator(error)
        }
    }

}

module.exports = FlightService;