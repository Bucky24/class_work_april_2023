const router = require("express").Router();

const travellerRouter = require('./travellerRoutes');

router.use('/traveller', travellerRouter);

module.exports = router;