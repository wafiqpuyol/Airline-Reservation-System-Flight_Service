const { AirplaneRepository } = require('../repository');
const errorGenerator = require('../utils/error/error-generator');



const airplaneRepository = new AirplaneRepository()
class AirplaneService {

    async createFlight(data) {
        try {
            console.log(data);
            const query = await airplaneRepository.create(data);
            return query;
        } catch (error) {
            console.log("==> create-service-Airplane", error);
            throw errorGenerator(error)
        }
    }
}

module.exports = AirplaneService