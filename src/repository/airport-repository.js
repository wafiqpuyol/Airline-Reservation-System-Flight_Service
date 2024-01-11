const { Airport } = require('../models')
const CrudRepository = require('../repository/crud-repository');



class AirportRepository extends CrudRepository {
    constructor() {
        super(Airport)
    }
}

module.exports = AirportRepository;