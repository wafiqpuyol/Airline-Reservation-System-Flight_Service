const router = require('express').Router();
const airplaneRoutes = require('./airplane-routes')

router.use("/airplanes", airplaneRoutes);

module.exports = router;