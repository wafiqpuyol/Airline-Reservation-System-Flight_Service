const { StatusCodes } = require('http-status-codes')
const ErrorResponse = require('../utils/common')
const errorGenerator = require('../utils/error/error-generator')
const compareTime = require('../utils/helper/compareTime')

const validateCreateRequest = (req, res, next) => {
    if (!req.body.flight_name) {
        ErrorResponse.message = "Please enter a Flight Name";
        ErrorResponse.error = errorGenerator('Invalid Flight Name');
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }

    if (!req.body.airplane_id) {
        ErrorResponse.message = "Please enter a Airplane Id";
        ErrorResponse.error = errorGenerator('Invalid Airplane Id');
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }

    if (!req.body.airport_id) {
        ErrorResponse.message = "Please enter a Airport Id";
        ErrorResponse.error = errorGenerator('Invalid Airport Id');
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }

    if (!req.body.arrival_airport_id) {
        ErrorResponse.message = "Please enter a Arrival Airport Id";
        ErrorResponse.error = errorGenerator('Invalid Arrival Airport Id');
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }

    if (!req.body.departure_airport_id) {
        ErrorResponse.message = "Please enter a  Departure Airport Id";
        ErrorResponse.error = errorGenerator('Invalid Departure Airport Id');
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }

    if (!req.body.total_seats) {
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

    if (!req.body.arrival_time) {
        ErrorResponse.message = "Please enter a Arrival Time";
        ErrorResponse.error = errorGenerator('Invalid Total Arrival Time');
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }

    if (!req.body.departure_time) {
        ErrorResponse.message = "Please enter a Departure Time";
        ErrorResponse.error = errorGenerator('Invalid Total Departure Time');
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }

    if (!compareTime(req.body.arrival_time, req.body.departure_time)) {
        ErrorResponse.message = "Please enter a valid Arrival Time";
        ErrorResponse.error = errorGenerator("arrival Time must be greater than departure Time");
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    next()
}


module.exports = { validateCreateRequest }