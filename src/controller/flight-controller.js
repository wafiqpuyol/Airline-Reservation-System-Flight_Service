const { StatusCodes } = require('http-status-codes')
const { FlightService } = require('../service')
const { SuccessResponse, ErrorResponse } = require('../utils/common')


const flightService = new FlightService()

const createFlight = async (req, res) => {
    try {
        console.log(req.body);
        const flight = await flightService.createFlight({ ...req.body })

        SuccessResponse.message = "Flight created Successfully";
        SuccessResponse.data = flight;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse)
    } catch (error) {
        console.log(error);
        ErrorResponse.message = "Something went wrong while creating Flight";
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse)
    }
}

const getAllFlight = async (req, res) => {
    try {
        console.log(req.query);
        const flight = await flightService.getAllFlight(req.query);
        SuccessResponse.message = 'Successfully Fetched all Flights';
        SuccessResponse.data = flight;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);
    } catch (error) {
        console.log(error);
        ErrorResponse.message = "Something went wrong while fetching flight";
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse)
    }
}

const getFlight = async (req, res) => {
    try {
        const flight = await flightService.getFlight(req.params.id)
        SuccessResponse.message = 'Successfully Fetched Flight';
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

const getAllSeats = async (req, res) => {
    try {
        const seat = await flightService.getAllSeats(req.params.id)
        SuccessResponse.message = 'Successfully Fetched All Seats';
        SuccessResponse.data = seat;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Something went wrong while fetching Seats";
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse)
    }
}


const updateRemainingSeat = async (req, res) => {
    console.log(req.body);
    try {
        const flight = await flightService.updateRemainingSeat({ ...req.body, flightId: req.params.id })
        SuccessResponse.message = 'Successfully Fetched Flight';
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

const updateSeatDB = async (req, res) => {
    try {
        const seatNumber = req.params.seatNumber.split("-")
        const flight = await flightService.updateSeatDB({ ...req.body, airplaneId: req.params.id, seatNumber })
        SuccessResponse.message = 'Successfully updated Seat Database';
        SuccessResponse.data = flight;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Something went wrong while updating Seat Database";
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse)
    }
}
module.exports = { createFlight, getAllFlight, getFlight, updateRemainingSeat, getAllSeats, updateSeatDB }