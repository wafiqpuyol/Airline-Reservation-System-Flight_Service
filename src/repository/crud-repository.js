const errorGenerator = require("../utils/error/error-generator");

class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        const query = await this.model.create(data);
        return query;
    }

    async findAll() {
        const query = await this.model.findAll();
        return query;
    }

    async findById(id) {
        const query = await this.model.findByPk(id);
        return query;
    }

    async find(data) {
        const query = await this.model.findAll({
            where: data
        })
        return query;
    }

    // async getFlight(data) {
    //     //future need 
    // }
}


module.exports = CrudRepository