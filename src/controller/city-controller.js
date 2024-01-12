const { CityService } = require('../service')
const { SuccessResponse, ErrorResponse } = require('../utils/common')
const { StatusCodes } = require('http-status-codes')



const cityService = new CityService()

const createCity = async (req, res) => {
    try {
        const city = await cityService.createCity({
            cityName: req.body.cityName,
        })
        SuccessResponse.message = "City created successfully";
        SuccessResponse.data = city;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse)

    } catch (error) {
        ErrorResponse.message = "Something went wrong while creating city";
        ErrorResponse.error = error;
        res
            .status(error.statusCode)
            .json(ErrorResponse)
    }
}

const getAllCities = async (req, res) => {
    try {
        const city = await cityService.getAllCities();
        SuccessResponse.message = "Cities Fetched successfully";
        SuccessResponse.data = city;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse)
    } catch (error) {
        ErrorResponse.message = "Something went wrong while getting cities";
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse)
    }
}

const getCityById = async (req, res) => {
    try {
        const city = await cityService.getCityById(req.params.id)
        console.log(city);
        SuccessResponse.message = "Cities Fetched successfully";
        SuccessResponse.data = city;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse)
    } catch (error) {
        ErrorResponse.message = "Something went wrong while getting city";
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse)
    }
}


module.exports = { createCity, getAllCities, getCityById }

