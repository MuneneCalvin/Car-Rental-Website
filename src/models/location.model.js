const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: 'active'
    },
    is_deleted: {
        type: Boolean,
        default: false
    }
},
{
    timestamps: true

});


module.exports = mongoose.model('Location', locationSchema);