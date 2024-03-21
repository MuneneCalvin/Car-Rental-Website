const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    booking: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Booking",
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    payment_method: {
        type: String,
        enum: ["visa", "mpesa", "cash"],
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


module.exports = mongoose.model('Payment', paymentSchema);