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
            const [departureAirportCode, arrivalAirportCode] = query.trips.split('-');
            customFilters = {
                [Op.and]: [
                    { departureAirportCode },
                    { arrivalAirportCode },
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
            customFilters.departureTime = {
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

    async getFlight(id) {
        try {
            const query = await flightRepository.getFlightById(id);
            return query;
        } catch (error) {
            console.log(error);
            throw errorGenerator(error)
        }
    }

    async updateRemainingSeat(data) {
        try {
            const query = await flightRepository.updateRemainingSeat(data.flightId, data.noOfSeats, data.dec);
            return query;
        } catch (error) {
            console.log(error);
            throw errorGenerator(error)
        }
    }

}

module.exports = FlightService;