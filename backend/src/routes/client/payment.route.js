const express = require('express');
const router = express.Router();
const { paymentController } = require('../../controllers');
const verifyToken = require('../../middlewares/verifyToken');

router.post('/add_payment/', paymentController.addPayment).all(verifyToken);
router.get('/:paymentId', paymentController.getPayment).all(verifyToken);

module.exports = router;