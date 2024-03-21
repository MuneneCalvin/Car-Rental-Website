const express = require('express');
const router = express.Router();
const { carsController } = require('../../controllers');
const verifyToken = require('../../middlewares/verifyToken');

router.post('/', carsController.getAllCars).all(verifyToken);
router.post('', carsController.getCar).all(verifyToken);
router.post('/:carId', carsController.getCar).all(verifyToken);


module.exports = router;