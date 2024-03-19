const express = require('express');
const router = express.Router();
const { carsController } = require('../../controllers');

router.post('/', carsController.getAllCars);
router.post('', carsController.getCar);
router.post('/:carId', carsController.getCar);


module.exports = router;