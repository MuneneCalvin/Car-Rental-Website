const express = require('express');
const router = express.Router();
const { paymentController } = require('../../controllers');
const verifyToken = require('../../middlewares/verifyToken');

router.post('/add_payment/', paymentController.addPayment).all(verifyToken);
router.get('/:paymentId', paymentController.getPayment).all(verifyToken);
router.get('/get_payment_by_booking_id/:bookingId', paymentController.getPaymentByBookingId).all(verifyToken);
router.get('/get_payment_by_customer_id/:customerId', paymentController.getPaymentByCustomerId).all(verifyToken);
router.get('/', paymentController.getAllPayments).all(verifyToken);
router.put('/:paymentId', paymentController.updatePayment).all(verifyToken);

module.exports = router;