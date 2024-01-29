const router = require('express').Router();
const { FlightController } = require('../../controller')
const { FlightMiddleware } = require('../../middleware')

router.post('/',
    FlightMiddleware.validateCreateRequest,
    FlightController.createFlight
)

router.get('/',
    FlightController.getAllFlight
)

// fetch flight by id
router.get('/:id',
    FlightController.getFlight
)

// fetch all seats from seatDB
router.get('/:id/seats',
    FlightController.getAllSeats
)

router.patch('/:id/seats/:seatNumber',
    FlightController.updateSeatDB
)

router.patch('/:id/seats',
    FlightController.updateRemainingSeat
)


module.exports = router;