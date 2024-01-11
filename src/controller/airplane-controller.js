const { AirplaneService } = require('../service')
const { SuccessResponse, ErrorResponse } = require('../utils/common')
const { StatusCodes } = require('http-status-codes')



const airplaneService = new AirplaneService()

const createFlight = async (req, res) => {
    try {
        const airplane = await airplaneService.createFlight({
            model_name: req.body.model_name,
            capacity: req.body.capacity,
        })
        SuccessResponse.message = "Flight created successfully";
        SuccessResponse.data = airplane;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse)

    } catch (error) {
        ErrorResponse.message = "Something went wrong while creating flight";
        ErrorResponse.error = error;
        res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json(ErrorResponse)
    }
}

module.exports = { createFlight }

