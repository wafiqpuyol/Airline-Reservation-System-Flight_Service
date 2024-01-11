const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const errorGenerator = require("../utils/error/error-generator");

const validateCreateRequest = (req, res, next) => {
    if (!req.body.model_name || !req.body.capacity) {
        ErrorResponse.message = "Invalid model name or capacity";
        ErrorResponse.error = errorGenerator('Model name & capacity must be specified');
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    next();
}

// const validateDeleteRequest = (req, res, next) => {

//     if (!req.body.model_name) {
//         // creating JSON object
//         ErrorResponse.message = "Invalid model name ";
//         ErrorResponse.error = errorGenerator("Model name is required")
//         return res
//             .status(StatusCodes.BAD_REQUEST)
//             .json(ErrorResponse)
//     }
//     next()
// }

const validateUpdateRequest = (req, res, next) => {

    if ((typeof id === "number") && (!req.body.model_name || !req.body.capacity)) {
        // creating JSON object
        ErrorResponse.message = "Invalid model name or capacity";
        ErrorResponse.error = errorGenerator("please provide valid model name or capacity")
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    next()
}

module.exports = { validateCreateRequest, validateUpdateRequest }