const express = require('express');

const { AirplaneController } = require('../../controllers');
const { AirplaneMiddlewares } = require('../../middlewares');

const router = express.Router();

router.post(
  '/',
  AirplaneMiddlewares.validateCreateRequest,
  AirplaneController.createAirplane
);

module.exports = router;

/**
 * POST /api/v1/airplanes
          ↓
validateCreateRequest
          ↓
   modelNumber?
     ↙       ↘
   NO         YES
   ↓           ↓
  400       Controller
              ↓
          Sequelize
 */