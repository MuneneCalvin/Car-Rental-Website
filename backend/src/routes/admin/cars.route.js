const express = require('express');
const router = express.Router();
const { carsController } = require('../../controllers');
const verifyToken = require('../../middlewares/verifyToken');

router.post('/add_car/', carsController.addCar).all(verifyToken);
router.put('/update/:carId', carsController.updateCar).all(verifyToken);
router.delete('/:carId', carsController.deleteCarById).all(verifyToken);


module.exports = router;