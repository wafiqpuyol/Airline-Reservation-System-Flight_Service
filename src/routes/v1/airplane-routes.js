const router = require('express').Router();
const { AirplaneMiddleware } = require('../../middleware')
const { AirplaneController } = require('../../controller')


/**
 * /api/v1/airplanes
 */

router.post("/", AirplaneMiddleware.validateCreateRequest, AirplaneController.createAirplane);

router.get("/", AirplaneController.getAllAirplanes)

router.get("/:id", AirplaneController.getAirplaneById)

module.exports = router;