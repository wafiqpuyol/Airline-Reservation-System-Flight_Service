const errorGenerator = require('../utils/error/error-generator');
const { ErrorResponse } = require('../utils/common');
const { StatusCodes } = require('http-status-codes');


const validateCreateRequest = (req, res, next) => {
    if (!req.body.airportName || (typeof req.body.airportName !== 'string')) {
        ErrorResponse.message = "Invalid Airport Name"
        ErrorResponse.error = errorGenerator('Airport Name must be specified');
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    if (!req.body.code || (typeof req.body.code !== 'string')) {
        ErrorResponse.message = "Invalid Code"
        ErrorResponse.error = errorGenerator('Code must be specified');
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    // if (!req.body.code) {
    //     ErrorResponse.message = "Invalid Address"
    //     ErrorResponse.error = errorGenerator('Address must be specified');
    //     return res
    //         .status(StatusCodes.BAD_REQUEST)
    //         .json(ErrorResponse)
    // }
    if (!req.body.cityId) {
        ErrorResponse.message = "Invalid City Id"
        ErrorResponse.error = errorGenerator('City Id must be specified');
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    next()
}

module.exports = { validateCreateRequest }