const express = require('express');
const router = express.Router();
const { bookingController } = require('../../controllers');

router.post('/add_booking/', bookingController.addBooking);
router.get('/:bookingId', bookingController.getBooking);


module.exports = router;
