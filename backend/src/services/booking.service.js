const { ObjectId } = require('mongodb');
const { Booking } = require('../models');


const addBooking = async (bookingBody) => {
    return Booking.create(bookingBody);
}

const getAllBookings = async () => {
    return Booking.find();
}

const getBooking = async (bookingId) => {
    const result = await Booking.findOne({ _id: ObjectId(bookingId) });
    return result;
}

const updateBooking = async (bookingId, updateBody) => {
    return Booking.findByIdAndUpdate (bookingId, updateBody, { new: true });
};

const deleteBookingById = async (bookingId) => {
    return Booking.findByIdAndUpdate (bookingId, { is_deleted: true }, { new: true });
}

module.exports = {
    addBooking,
    getAllBookings,
    getBooking,
    updateBooking,
    deleteBookingById
}