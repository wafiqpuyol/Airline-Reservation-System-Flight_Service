const errorGenerator = require('../utils/error/error-generator');
const { ErrorResponse } = require('../utils/common');
const { StatusCodes } = require('http-status-codes');


const validateCreateRequest = (req, res, next) => {
    if (!req.body.cityName || (typeof req.body.cityName !== 'string')) {
        ErrorResponse.message = "City Name Airport Name"
        ErrorResponse.error = errorGenerator('City Name must be specified');
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    next()
}

module.exports = { validateCreateRequest }