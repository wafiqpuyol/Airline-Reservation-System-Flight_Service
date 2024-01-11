const router = require('express').Router();
const { AirplaneMiddleware } = require('../../middleware')
const { AirplaneController } = require('../../controller')


router.post("/", AirplaneMiddleware.validateCreateRequest, AirplaneController.createFlight);


module.exports = router;