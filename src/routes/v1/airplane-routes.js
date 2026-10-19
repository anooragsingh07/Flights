const express = require('express');

const { AirplaneController } = require('../../controllers');
const { AirplaneMiddlewares } = require('../../middlewares');

const router = express.Router();

router.post(
  '/',
  AirplaneMiddlewares.validateCreateRequest,
  AirplaneController.createAirplane
);

// /api/v1/airplanes GET
router.get('/', AirplaneController.getAirplanes);

// /api/v1/airplanes/:id PATCH
router.patch('/:id', AirplaneController.updateAirplane);

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