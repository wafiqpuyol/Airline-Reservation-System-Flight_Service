const router = require('express').Router();
const AirplaneRoutes = require('./airplane-routes')
const AirportRoutes = require('./airport-routes')
const CityRoutes = require('./city-routes')
const FlightRoutes = require('./flight-routes')

router.use("/airplanes", AirplaneRoutes);
router.use("/airports", AirportRoutes);
router.use("/cities", CityRoutes);
router.use("/flights", FlightRoutes);

module.exports = router;