const { AirportRepository } = require('../repository');
const errorGenerator = require('../utils/error/error-generator');



const airportRepository = new AirportRepository()

class AirportService {
    async createAirport(data) {
        try {
            const query = await airportRepository.create(data);
            return query;
        } catch (error) {
            console.log("==> create-service-Airport", error);
            throw errorGenerator(error)
        }
    }

    async getAllAirports() {
        try {
            const query = await airportRepository.findAll();
            return query;
        } catch (error) {
            console.log("==> get-service-Airports", error);
            throw errorGenerator(error);
        }
    }

    async getAirportById(id) {
        try {
            const query = await airportRepository.findById(id)
            if (query === null) {
                throw new Error("Provide a valid airport id");
            }
            return query;
        } catch (error) {
            throw errorGenerator(error.message)
        }
    }
}

module.exports = AirportService