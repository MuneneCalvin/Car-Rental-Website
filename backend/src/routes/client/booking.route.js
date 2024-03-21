const express = require('express');
const router = express.Router();
const { bookingController } = require('../../controllers');
const verifyToken = require('../../middlewares/verifyToken');

router.post('/add_booking/', bookingController.addBooking).all(verifyToken);
router.get('/:bookingId', bookingController.getBooking).all(verifyToken);


module.exports = router;
