const router = require('express').Router();
const { CityController } = require('../../controller')
const { CityMiddleware } = require('../../middleware')


router.get('/', CityController.getAllCities)
router.get('/:id', CityController.getCityById)
router.post('/', CityMiddleware.validateCreateRequest, CityController.createCity)

module.exports = router;