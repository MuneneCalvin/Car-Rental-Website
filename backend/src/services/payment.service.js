const { ObjectId } = require('mongoose');
const { Payment , User} = require('../models');


const addPayment = async (paymentBody) => {
    return Payment.create(paymentBody);
};

const getAllPayments = async () => {
    return Payment.find();
};

const getPayment = async (paymentId) => {
    const result = await Payment.findOne({ _id: ObjectId(paymentId) });
    return result;
};

const getPamentByBookingId = async (bookingId) => {
    const result = await Payment.findOne({ booking: ObjectId(bookingId) });
    return result;
};

const getPaymentByCustomerId = async (customerId) => {
    const result = await User.findOne({ customer: ObjectId(customerId) });
    return result;
};

const updatePayment = async (paymentId, updateBody) => {
    return Payment.findByIdAndUpdate (paymentId, updateBody, { new: true });
};

const deletePaymentById = async (paymentId) => {
    return Payment.findByIdAndUpdate ( paymentId, { is_deleted: true }, { new: true });
};


module.exports = {
    addPayment,
    getAllPayments,
    getPayment,
    getPamentByBookingId,
    getPaymentByCustomerId,
    updatePayment,
    deletePaymentById
}