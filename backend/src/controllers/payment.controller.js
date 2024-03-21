const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { paymentServices } = require('../services');

const addPayment = catchAsync(async (req, res) => {
    try {
        const result = await paymentServices.addPayment(req.body);
        if (!result) return res.status(httpStatus.BAD_REQUEST).json({ success: false, message: 'Create Failed!', data: {} });
        res.status(201).json({ success: true, message: 'Success', data: result });
    } catch (error) {
        console.log("ERROR - ", error)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: 'Internal Server Error', data: {} });
    }
});

const getAllPayments = catchAsync(async (req, res) => {
    try {
        const result = await paymentServices.getAllPayments();
        if (!result) return res.status(httpStatus.BAD_REQUEST).json({ success: false, message: 'No data available', data: {} });
        res.status(200).json({ success: true, message: 'Success', data: result });
    } catch (error) {
        console.log("ERROR - ", error)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: 'Internal Server Error', data: {} });
    }
});

const getPayment = catchAsync(async (req, res) => {
    try {
        const result = await paymentServices.getPayment(req.params.paymentId);
        if (!result) return res.status(httpStatus.BAD_REQUEST).json({ success: false, message: 'No data available!', data: {} });
        res.status(200).json({ success: true, message: 'Success', data: result });
    } catch (error) {
        console.log("ERROR - ", error)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: 'Internal Server Error', data: {} });
    }
});

const getPaymentByBookingId = catchAsync(async (req, res) => {
    try {
        const result = await paymentServices.getPamentByBookingId(req.params.bookingId);
        if (!result) return res.status(httpStatus.BAD_REQUEST).json({ success: false, message: 'No data available!', data: {} });
        res.status(200).json({ success: true, message: 'Success', data: result });
    } catch (error) {
        console.log("ERROR - ", error)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: 'Internal Server Error', data: {} });
    }
});

const getPaymentByCustomerId = catchAsync(async (req, res) => {
    try {
        const result = await paymentServices.getPaymentByCustomerId(req.params.customerId);
        if (!result) return res.status(httpStatus.BAD_REQUEST).json({ success: false, message: 'No data available!', data: {} });
        res.status(200).json({ success: true, message: 'Success', data: result });
    } catch (error) {
        console.log("ERROR - ", error)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: 'Internal Server Error', data: {} });
    }
});

const updatePayment = catchAsync(async (req, res) => {
    try {
        const result = await paymentServices.updatePayment(req.params.paymentId, req.body);
        if (!result) return res.status(httpStatus.BAD_REQUEST).json({ success: false, message: 'Update Failed!', data: {} });
        res.status(200).json({ success: true, message: 'Success', data: result });
    } catch (error) {
        console.log("ERROR - ", error)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: 'Internal Server Error', data: {} });
    }
});

const deletePaymentById = catchAsync(async (req, res) => {
    try {
        const result = await paymentServices.deletePaymentById(req.params.paymentId);
        if (!result) return res.status(httpStatus.BAD_REQUEST).json({ success: false, message: 'Delete Failed!', data: {} });
        res.status(200).json({ success: true, message: 'Success', data: result });
    } catch (error) {
        console.log("ERROR - ", error)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: 'Internal Server Error', data: {} });
    }
});


module.exports = {
    addPayment,
    getAllPayments,
    getPayment,
    getPaymentByBookingId,
    getPaymentByCustomerId,
    updatePayment,
    deletePaymentById
}