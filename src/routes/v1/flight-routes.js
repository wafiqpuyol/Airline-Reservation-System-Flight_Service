const router = require('express').Router();
const { FlightController } = require('../../controller')
const { FlightMiddleware } = require('../../middleware')

router.post('/',
    FlightMiddleware.validateCreateRequest,
    FlightController.createFlight
)

router.get('/', FlightController.getAllFlight)


module.exports = router;