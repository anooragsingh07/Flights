//got request -> pass it to service(service will do all the computation, DB interaction with repository etc) then give back the airplane(return res) -> what controller does extra is structure the output response (to trigger this controller -> register in a route)


const { StatusCodes } = require('http-status-codes');

const { AirplaneService } = require('../services');
const { ForeignKeyConstraintError, Model } = require('sequelize');
const { response } = require('express');

/**
 * POST : /airplane
 * req-body {modelNumber: 'airbus320', capacity: 200}
 */

async function createAirplane(req, res) {
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });

        return res
            .status(StatusCodes.CREATED)
            .json({
                success: true,
                message: 'Successfully create an airplane',
                data: airplane,
                error: {}
            });
    } catch (error) {
        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({
                success: false,
                message: 'Something went wrong while creating airplane',
                data: {},
                error: error
            });
    }
}

module.exports = {
    createAirplane
}