const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { bookingServices } = require('../services');

const addBooking = catchAsync(async (req, res) => {
    try {
        const result = await bookingServices.addBooking(req.body);
        if (!result) return res.status(httpStatus.BAD_REQUEST).json({ success: false, message: 'Create Failed!', data: {} });
        res.status(201).json({ success: true, message: 'Success', data: result });
    } catch (error) {
        console.log("ERROR - ", error)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: 'Internal Server Error', data: {} });
    }
});

const getAllBookings = catchAsync(async (req, res) => {
    try {
        const result = await bookingServices.getAllBookings();
        if (!result) return res.status(httpStatus.BAD_REQUEST).json({ success: false, message: 'No data available', data: {} });
        res.status(200).json({ success: true, message: 'Success', data: result });
    } catch (error) {
        console.log("ERROR - ", error)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: 'Internal Server Error', data: {} });
    }
});

const getBooking = catchAsync(async (req, res) => {
    try {
        const result = await bookingServices.getBooking(req.params.bookingId);
        if (!result) return res.status(httpStatus.BAD_REQUEST).json({ success: false, message: 'No data available!', data: {} });
        res.status(200).json({ success: true, message: 'Success', data: result });
    } catch (error) {
        console.log("ERROR - ", error)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: 'Internal Server Error', data: {} });
    }
});

const updateBooking = catchAsync(async (req, res) => {
    try {
        const result = await bookingServices.updateBooking(req.params.bookingId, req.body);
        if (!result) return res.status(httpStatus.BAD_REQUEST).json({ success: false, message: 'Update Failed!', data: {} });
        res.status(200).json({ success: true, message: 'Success', data: result });
    } catch (error) {
        console.log("ERROR - ", error)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: 'Internal Server Error', data: {} });
    }
});

const deleteBookingById = catchAsync(async (req, res) => {
    try {
        const result = await bookingServices.deleteBookingById(req.params.bookingId);
        if (!result) return res.status(httpStatus.BAD_REQUEST).json({ success: false, message: 'Delete Failed!', data: {} });
        res.status(200).json({ success: true, message: 'Success', data: result });
    } catch (error) {
        console.log("ERROR - ", error)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: 'Internal Server Error', data: {} });
    }
});

module.exports = {
    addBooking,
    getAllBookings,
    getBooking,
    updateBooking,
    deleteBookingById
}