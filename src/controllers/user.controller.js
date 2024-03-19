const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { userServices } = require('../services');

const register = catchAsync(async (req, res) => {
    try {
        const result = await userServices.register(req.body);
        if (!result) return res.status(httpStatus.BAD_REQUEST).json({ success: false, message: 'Register Failed!', data: {} });
        res.status(201).json({ success: true, message: 'Success', data: result });
    } catch (error) {
        console.log("ERROR - ", error)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: 'Internal Server Error', data: {} });
    }
});

const login = catchAsync(async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await userServices.login(email, password);
        if (!result) return res.status(httpStatus.BAD_REQUEST).json({ success: false, message: 'Login Failed!', data: {} });
        res.status(200).json({ success: true, message: 'Log In successful', data: result });
    } catch (error) {
        console.log("ERROR - ", error)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: 'Internal Server Error', data: {} });
    }
});


const getUsers = catchAsync(async (req, res) => {
    try {
        const result = await userServices.getUsers();
        if (!result) return res.status(httpStatus.BAD_REQUEST).json({ success: false, message: 'No data available', data: {} });
        res.status(200).json({ success: true, message: 'Success', data: result });
    } catch (error) {
        console.log("ERROR - ", error)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: 'Internal Server Error', data: {} });
    }
});

const getUserById = catchAsync(async (req, res) => {
    try {
        const result = await userServices.getUser(req.params.userId);
        if (!result) return res.status(httpStatus.BAD_REQUEST).json({ success: false, message: 'No data available!', data: {} });
        res.status(200).json({ success: true, message: 'Success', data: result });
    } catch (error) {
        console.log("ERROR - ", error)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: 'Internal Server Error', data: {} });
    }
});

const updateUser = catchAsync(async (req, res) => {
    try {
        const result = await userServices.updateUser(req.params.userId, req.body);
        if (!result) return res.status(httpStatus.BAD_REQUEST).json({ success: false, message: 'Update Failed!', data: {} });
        res.status(200).json({ success: true, message: 'Success', data: result });
    } catch (error) {
        console.log("ERROR - ", error)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: 'Internal Server Error', data: {} });
    }
});

const deleteUser = catchAsync(async (req, res) => {
    try {
        const result = await userServices.deleteUser(req.params.userId);
        if (!result) return res.status(httpStatus.BAD_REQUEST).json({ success: false, message: 'Delete Failed!', data: {} });
        res.status(200).json({ success: true, message: 'Success', data: result });
    } catch (error) {
        console.log("ERROR - ", error)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: 'Internal Server Error', data: {} });
    }
});

module.exports = {
    register,
    login,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
};