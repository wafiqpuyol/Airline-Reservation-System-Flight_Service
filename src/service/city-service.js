const { CityRepository } = require('../repository');
const errorGenerator = require('../utils/error/error-generator');



const cityRepository = new CityRepository()

class CityService {
    async createCity(data) {
        try {
            const query = await cityRepository.create(data);
            return query;
        } catch (error) {
            console.log("==> create-service-City", error);
            throw errorGenerator(error)
        }
    }

    async getAllCities() {
        try {
            const query = await cityRepository.findAll();
            return query;
        } catch (error) {
            console.log("==> get-service-Cities", error);
            throw errorGenerator(error);
        }
    }

    async getCityById(id) {
        try {
            const query = await cityRepository.findById(id)
            if (query === null) {
                throw new Error("Provide a valid city id");
            }
            return query;
        } catch (error) {
            throw errorGenerator(error.message)
        }
    }
}

module.exports = CityService