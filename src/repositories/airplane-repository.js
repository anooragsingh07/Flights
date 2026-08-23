const CrudRepository = require('./crud-repository');
const { Airplane } = require('../models');
const airplane = require('../models/airplane');

class AirplaneRepository extends CrudRepository {
    constructor() {
        super(Airplane) // calling constructor of parent class
    }

    // async someRawQuery() {
        
    // }
}

module.exports = AirplaneRepository;