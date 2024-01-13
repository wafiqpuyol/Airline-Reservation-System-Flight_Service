const { StatusCodes } = require('http-status-codes')
const { FlightService } = require('../service')
const { SuccessResponse, ErrorResponse } = require('../utils/common')


const flightService = new FlightService()

const createFlight = async (req, res) => {
    try {
        const flight = await flightService.createFlight({
            flight_name: req.body.flight_name,
            airplane_id: req.body.airplane_id,
            airport_id: req.body.airport_id,
            arrival_airport_id: req.body.arrival_airport_id,
            departure_airport_id: req.body.departure_airport_id,
            total_seats: req.body.total_seats,
            price: req.body.price,
            boarding_gate: req.body.boarding_gate,
            arrival_time: req.body.arrival_time,
            departure_time: req.body.departure_time,
        })

        SuccessResponse.message = "Flight created Successfully";
        SuccessResponse.data = flight;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse)
    } catch (error) {
        ErrorResponse.message = "Something went wrong while creating Flight";
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse)
    }
}

const getAllFlight = async (req, res) => {
    try {
        const flight = await flightService.getAllFlight(req.query);
        SuccessResponse.message = 'Successfully Fetched all Flights';
        SuccessResponse.data = flight;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Something went wrong while fetching flight";
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse)
    }
}

const getFlight = async (req, res) => {
    try {
        const flight = await flightService(req.query)
        SuccessResponse.message = 'Successfully Fetched all Flights';
        SuccessResponse.data = flight;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Something went wrong while fetching flight";
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse)
    }
}
module.exports = { createFlight, getAllFlight, getFlight }