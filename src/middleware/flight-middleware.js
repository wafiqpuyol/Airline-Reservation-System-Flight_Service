const { StatusCodes } = require('http-status-codes')
const ErrorResponse = require('../utils/common')
const errorGenerator = require('../utils/error/error-generator')
const compareTime = require('../utils/helper/compareTime')

const validateCreateRequest = (req, res, next) => {
    if (!req.body.flightName) {
        ErrorResponse.message = "Please enter a Flight Name";
        ErrorResponse.error = errorGenerator('Invalid Flight Name');
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }

    if (!req.body.airplaneId) {
        ErrorResponse.message = "Please enter a Airplane Id";
        ErrorResponse.error = errorGenerator('Invalid Airplane Id');
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }

    if (!req.body.airlineId) {
        ErrorResponse.message = "Please enter a Airline Id";
        ErrorResponse.error = errorGenerator('Invalid Airline Id');
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }

    if (!req.body.arrivalAirportCode) {
        ErrorResponse.message = "Please enter a Arrival Airport Code";
        ErrorResponse.error = errorGenerator('Invalid Arrival Airport Code');
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }

    if (!req.body.departureAirportCode) {
        ErrorResponse.message = "Please enter a  Departure Airport Code";
        ErrorResponse.error = errorGenerator('Invalid Departure Airport Code');
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }

    if (!req.body.totalSeats) {
        ErrorResponse.message = "Please enter a Total Seats Number";
        ErrorResponse.error = errorGenerator('Invalid Total Seats Number');
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }

    if (!req.body.price) {
        ErrorResponse.message = "Please enter a Price";
        ErrorResponse.error = errorGenerator('Invalid Price');
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }

    if (!req.body.arrivalTime) {
        ErrorResponse.message = "Please enter a Arrival Time";
        ErrorResponse.error = errorGenerator('Invalid Total Arrival Time');
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }

    if (!req.body.departureTime) {
        ErrorResponse.message = "Please enter a Departure Time";
        ErrorResponse.error = errorGenerator('Invalid Total Departure Time');
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }

    if (!compareTime(req.body.arrivalTime, req.body.departureTime)) {
        ErrorResponse.message = "Please enter a valid Arrival Time";
        ErrorResponse.error = errorGenerator("arrival Time must be greater than departure Time");
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    next()
}


module.exports = { validateCreateRequest }