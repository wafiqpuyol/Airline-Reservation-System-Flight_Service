const router = require('express').Router();
const { AirportController } = require('../../controller')
const { AirportMiddleware } = require('../../middleware')


router.get('/', AirportController.getAllAirports)
router.get('/:id', AirportController.getAirportById)
router.post('/', AirportMiddleware.validateCreateRequest, AirportController.createAirport)

module.exports = router;