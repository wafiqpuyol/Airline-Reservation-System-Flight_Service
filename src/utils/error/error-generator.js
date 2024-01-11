/**
 * 
 * this function generates two types of error
 * 1. server 2. client
 * client error needs custom message to be passed from middleware
 * server error needs whole error to be passed from service layer
 * 
 */

const { StatusCodes } = require("http-status-codes");
const AppError = require("./app-error");


const errorGenerator = (e) => {
    if (e?.errors) {
        let explanation = [];
        let malformedClientInputServerError = ["SequelizeValidationError", "SequelizeUniqueConstraintError"];
        let statusCode = 500;
        e.errors.forEach(item => explanation.push({
            message: item.message,
            type: item.type,
            value: item.value
        }))

        malformedClientInputServerError.forEach((i) => {
            if (e.name === i) statusCode = StatusCodes.BAD_REQUEST
        })

        const error = new AppError(explanation, statusCode);
        return error;

    } else {
        const error = new AppError([e], StatusCodes.BAD_REQUEST);
        return error;
    }
}


module.exports = errorGenerator