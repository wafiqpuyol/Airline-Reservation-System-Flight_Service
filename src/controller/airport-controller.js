const { AirportService } = require('../service')
const { SuccessResponse, ErrorResponse } = require('../utils/common')
const { StatusCodes } = require('http-status-codes')



const airportService = new AirportService()

const createAirport = async (req, res) => {
    try {
        const airport = await airportService.createAirport({
            airportName: req.body.airportName,
            code: req.body.code,
            address: req.body.address,
            cityId: req.body.cityId,
        })
        SuccessResponse.message = "Airport created successfully";
        SuccessResponse.data = airport;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse)

    } catch (error) {
        ErrorResponse.message = "Something went wrong while creating airport";
        ErrorResponse.error = error;
        res
            .status(error.statusCode)
            .json(ErrorResponse)
    }
}

const getAllAirports = async (req, res) => {
    try {
        const airport = await airportService.getAllAirports();
        SuccessResponse.message = "Airports Fetched successfully";
        SuccessResponse.data = airport;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse)
    } catch (error) {
        ErrorResponse.message = "Something went wrong while getting airports";
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse)
    }
}

const getAirportById = async (req, res) => {
    try {
        const airport = await airportService.getAirportById(req.params.id)
        console.log(airport);
        SuccessResponse.message = "Airports Fetched successfully";
        SuccessResponse.data = airport;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse)
    } catch (error) {
        ErrorResponse.message = "Something went wrong while getting airport";
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse)
    }
}


module.exports = { createAirport, getAllAirports, getAirportById }

