const express = require('express');
const router = express.Router();
const { carsController } = require('../../controllers');

router.post('/add_car/', carsController.addCar);
router.put('/update/:carId', carsController.updateCar);
router.delete('/:carId', carsController.deleteCarById);


module.exports = router;