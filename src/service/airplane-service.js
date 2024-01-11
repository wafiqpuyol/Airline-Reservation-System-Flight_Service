const { QueryTypes } = require('sequelize');
const { AirplaneRepository } = require('../repository');
const errorGenerator = require('../utils/error/error-generator');



const airplaneRepository = new AirplaneRepository()
class AirplaneService {

    async createAirplane(data) {
        try {
            const query = await airplaneRepository.create(data);
            return query;
        } catch (error) {
            console.log("==> create-service-Airplane", error);
            throw errorGenerator(error)
        }
    }

    async getAllAirplanes() {
        try {
            const query = await airplaneRepository.findAll();
            return query;
        } catch (error) {
            console.log("==> get-service-Airplanes", error);
            throw errorGenerator(error);
        }
    }

    async getAirplaneById(id) {
        try {
            const query = await airplaneRepository.findById(id)
            if (query === null) {
                throw new Error("Provide a valid airport id");
            }
            return query;
        } catch (error) {
            throw errorGenerator(error.message)
        }
    }
}

module.exports = AirplaneService