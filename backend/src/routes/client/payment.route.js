const express = require('express');
const router = express.Router();
const { paymentController } = require('../../controllers');

router.post('/add_payment/', paymentController.addPayment);
router.get('/:paymentId', paymentController.getPayment);

module.exports = router;