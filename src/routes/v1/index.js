const router = require('express').Router();
const airplaneRoutes = require('./airplane-routes')
const airportRoutes = require('./airport-routes')
const cityRoutes = require('./city-routes')

router.use("/airplanes", airplaneRoutes);
router.use("/airports", airportRoutes);
router.use("/cities", cityRoutes);

module.exports = router;