const { StatusCodes } = require('http-status-codes');
const { Logger } = require('../config');
const AppError = require('../utils/errors/app-error');

class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
       
        // try {
            const response = await this.model.create(data);
            return response;
        // } catch (error) {
        //     Logger.error('Something went wrong in the Crud repo : create');
        //     throw error;
        // }
    }

    async destroy(data) {
        try {
            const response = await this.model.destroy({
                where: {
                    id: data
                }
            });
            if(!response) {
                throw new AppError('Not able to fund the resource', StatusCodes.NOT_FOUND);
            }
            return response;
        } catch (error) {
            Logger.error('Something went wrong in the Crud repo : destroy');
            throw error;
        }
    }

    async get(data) {
        try {
            const response = await this.model.findByPk(data);
            if(!response) {
                throw new AppError('Not able to fund the resource', StatusCodes.NOT_FOUND);
            }
            return response;
        } catch (error) {
            Logger.error('Something went wrong in the Crud repo : get');
            throw error;
        }
    }

    async getAll() {
        try {
            const response = await this.model.findAll();
            return response;
        } catch (error) {
            Logger.error('Something went wrong in the Crud repo : getAll');
            throw error;
        }
    }

    async update(id, data) { // data -> {col: value, .....}
        try {
            const response = await this.model.update(data, {
                where: {
                    id: id
                }
            });
            return response;
        } catch (error) {
            Logger.error('Something went wrong in the Crud repo : update');
            throw error;
        }
    }
} 

module.exports = CrudRepository;