const mongoose = require('mongoose');

const vehiclesSchema = new mongoose.Schema({
    car_details: {
        name: {
            type: String,
            required: true
        },
        model: {
            type: String,
            required: true
        },
        images: {
            type: [Array],
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        location: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Location",
            required: true
        }
    },
    is_available: {
        type: Boolean,
        required: true,
    },
    is_deleted: {
        type: Boolean,
        default: false
    }
},
{
    timestamps: true

});

module.exports = mongoose.model('Vehicles', vehiclesSchema);