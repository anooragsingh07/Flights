const express = require('express');

const { AirplaneController } = require('../../controllers');

const router = express.Router();

router.post('/', AirplaneController.createAirplane);//this is referring to -> /api/vi/airplanes POST

module.exports = router;