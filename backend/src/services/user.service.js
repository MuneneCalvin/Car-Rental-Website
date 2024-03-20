const { ObjectId } = require('mongodb');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const httpStatus = require("http-status");
const { User } = require('../models');
const ApiError = require('../utils/ApiError');


const register = async (userBody) => {
    if (await User.isEmailTaken(userBody.email)) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
    }

    const user = await User.create(userBody);
    return { user };
};

const login = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new ApiError(httpStatus.UNAUTHORIZED, 'Invalid credentials');
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
        throw new ApiError(httpStatus.UNAUTHORIZED, 'Invalid credentials');
    }

    const token = jwt.sign({ id: user._id, Name: user.first_name }, process.env.JWT_SECRET, { expiresIn: '3h' });
    return { user, token };
};






const getUsers = async () => {
    const users = await User.find({ is_deleted: false });
    return users;
};

const getUser = async (userId) => {
    return User.findOne({ _id: ObjectId(userId) });
};

const updateUser = async (userId, updateBody) => {
    const user = await getUserById(userId);
    if (!user) {
        throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
    }
    if (updateBody.email && (await User.isEmailTaken(updateBody.email, userId))) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
    }

    return Components.findByIdAndUpdate(userId, updateBody, { new: true });
};

const deleteUser = async (userId) => {
    const user = await getUserById(userId);
    if (!user) {
        throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
    }

    return Components.findByIdAndUpdate(userId, { is_deleted: true }, { new: true });
};

module.exports = {
    register,
    login,
    getUsers,
    getUser,
    updateUser,
    deleteUser,
};