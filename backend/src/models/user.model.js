const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone_number: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
        type: String,
        default: 'https://res.cloudinary.com/dn4vqxw0k/image/upload/v1624550018/car-rental-api/default-user-image.png'
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        default: 'customer',
        enum: ['customer', 'admin']
    },
    status: {
        type: String,
        required: true,
        default: 'active'
    },
    personal_details: {
        national_id: {
            type: String,
            default: ''
        },
        driving_license: {
            type: String,
            default: ''
        },
        address: {
            type: Object,
            default: {
                street: '',
                city: 'Nairobi',
                state: 'Kenya'
            }
        },
    },
    is_deleted: {
        type: Boolean,
        default: false
    }
},
{
    timestamps: true
});

// Static method to check if email is taken
userSchema.statics.isEmailTaken = async function (email) {
    const user = await this.findOne({ email });
    return !!user;
};

userSchema.pre('save', async function (next) {
    // Hash password before saving the user
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});


module.exports = mongoose.model('User', userSchema);