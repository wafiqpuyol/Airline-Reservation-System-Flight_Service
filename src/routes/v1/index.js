const router = require('express').Router();
const airplaneRoutes = require('./airplane-routes')
const airportRoutes = require('./airport-routes')

router.use("/airplanes", airplaneRoutes);
router.use("/airports", airportRoutes);

module.exports = router;