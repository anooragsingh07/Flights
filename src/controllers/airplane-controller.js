//got request -> pass it to service(service will do all the computation, DB interaction with repository etc) then give back the airplane(return res) -> what controller does extra is structure the output response (to trigger this controller -> register in a route)


const { StatusCodes } = require('http-status-codes');

const { AirplaneService } = require('../services');

const { SuccessResponse, ErrorResponse } = require('../utils/common');

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

        SuccessResponse.data = airplane;

        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse);

    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

async function getAirplanes(req, res) {
    try {
        const airplanes = await AirplaneService.getAirplanes();
        SuccessResponse.data = airplanes;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

/**
 * PATCH : /airplanes/:id
 * req-body {capacity: 250}
 */
async function updateAirplane(req, res) {
    try {
        const airplane = await AirplaneService.updateAirplane(req.params.id, {
            capacity: req.body.capacity
        });
        SuccessResponse.data = airplane;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
                .json(ErrorResponse);
    }
}

/**
 * GET : /airplanes/:id
 */
async function getAirplane(req, res) {
    try {
        const airplane = await AirplaneService.getAirplane(req.params.id);
        SuccessResponse.data = airplane;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

/**
 * DELETE : /airplanes/:id
 * req-body {}
 */
async function destroyAirplane(req, res) {
    try {
        const airplanes = await AirplaneService.destroyAirplane(req.params.id);
        SuccessResponse.data = airplanes;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
                .json(ErrorResponse);
    }
}

module.exports = {
    createAirplane,
    getAirplanes,
    updateAirplane,
    getAirplane,
    destroyAirplane
}