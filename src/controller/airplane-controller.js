const { AirplaneService } = require('../service')
const { SuccessResponse, ErrorResponse } = require('../utils/common')
const { StatusCodes } = require('http-status-codes')



const airplaneService = new AirplaneService()

const createAirplane = async (req, res) => {
    try {
        const airplane = await airplaneService.createAirplane({
            model_name: req.body.model_name,
            capacity: req.body.capacity,
        })
        SuccessResponse.message = "Airplane created successfully";
        SuccessResponse.data = airplane;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse)

    } catch (error) {
        ErrorResponse.message = "Something went wrong while creating airplane";
        ErrorResponse.error = error;
        res
            .status(error.statusCode)
            .json(ErrorResponse)
    }
}

const getAllAirplanes = async (req, res) => {
    try {
        const airplane = await airplaneService.getAllAirplanes();
        SuccessResponse.message = "Airplanes Fetched successfully";
        SuccessResponse.data = airplane;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse)
    } catch (error) {
        ErrorResponse.message = "Something went wrong while getting airplanes";
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse)
    }
}

const getAirplaneById = async (req, res) => {
    try {
        const airplane = await airplaneService.getAirplaneById(req.params.id)
        SuccessResponse.message = "Airplanes Fetched successfully";
        SuccessResponse.data = airplane;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse)
    } catch (error) {
        ErrorResponse.message = "Something went wrong while getting airplane";
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse)
    }
}


module.exports = { createAirplane, getAllAirplanes, getAirplaneById }

