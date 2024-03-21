const express = require('express');
const router = express.Router();
const { paymentController } = require('../../controllers');

router.post('/add_payment/', paymentController.addPayment);
router.get('/:paymentId', paymentController.getPayment);
router.get('/get_payment_by_booking_id/:bookingId', paymentController.getPaymentByBookingId);
router.get('/get_payment_by_customer_id/:customerId', paymentController.getPaymentByCustomerId);
router.get('/', paymentController.getAllPayments);
router.put('/:paymentId', paymentController.updatePayment);

module.exports = router;