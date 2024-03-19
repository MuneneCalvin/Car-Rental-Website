const express = require('express');
const router = express.Router();
const { bookingController } = require('../../controllers');

router.post('/add_booking/', bookingController.addBooking);
router.get('/all_bookings/', bookingController.getAllBookings);
router.get('/:bookingId', bookingController.getBooking);
router.put('/update/:bookingId', bookingController.updateBooking);
router.delete('/:bookingId', bookingController.deleteBookingById);


module.exports = router;
