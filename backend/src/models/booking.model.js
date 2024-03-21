const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    car: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vehicles",
        required: true
    },
    start_date: {
        type: Date,
        required: true
    },
    end_date: {
        type: Date,
        required: true
    },
    method_of_payment: {
        type: String,
        enum: ["visa", "mpesa", "cash"],
        required: true
    },
    payment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Payment",
        required: true
    },

    status: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "pending"
    },
    is_deleted: {
        type: Boolean,
        default: false
    }
},
{
    timestamps: true
});


module.exports = mongoose.model('Booking', bookingSchema);