const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { carsServices } = require('../services');

const addCar = catchAsync(async (req, res) => {
    try {
        const result = await carsServices.addCar(req.body);
        if (!result) return res.status(httpStatus.BAD_REQUEST).json({ success: false, message: 'Create Failed!', data: {} });
        res.status(201).json({ success: true, message: 'Success', data: result });
    } catch (error) {
        console.log("ERROR - ", error)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: 'Internal Server Error', data: {} });
    }
});

const getAllCars = catchAsync(async (req, res) => {
    try {
        const result = await carsServices.getAllCars();
        if (!result) return res.status(httpStatus.BAD_REQUEST).json({ success: false, message: 'No data available', data: {} });
        res.status(200).json({ success: true, message: 'Success', data: result });
    } catch (error) {
        console.log("ERROR - ", error)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: 'Internal Server Error', data: {} });
    }
});

const getCar = catchAsync(async (req, res) => {
    try {
        const result = await carsServices.getCar(req.params.carId);
        if (!result) return res.status(httpStatus.BAD_REQUEST).json({ success: false, message: 'No data available!', data: {} });
        res.status(200).json({ success: true, message: 'Success', data: result });
    } catch (error) {
        console.log("ERROR - ", error)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: 'Internal Server Error', data: {} });
    }
});

const updateCar = catchAsync(async (req, res) => {
    try {
        const result = await carsServices.updateCar(req.params.carId, req.body);
        if (!result) return res.status(httpStatus.BAD_REQUEST).json({ success: false, message: 'Update Failed!', data: {} });
        res.status(200).json({ success: true, message: 'Success', data: result });
    } catch (error) {
        console.log("ERROR - ", error)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: 'Internal Server Error', data: {} });
    }
});

const deleteCarById = catchAsync(async (req, res) => {
    try {
        const result = await carsServices.deleteCarById(req.params.carId);
        if (!result) return res.status(httpStatus.BAD_REQUEST).json({ success: false, message: 'Delete Failed!', data: {} });
        res.status(200).json({ success: true, message: 'Success', data: result });
    } catch (error) {
        console.log("ERROR - ", error)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: 'Internal Server Error', data: {} });
    }
});


module.exports = {
    addCar,
    getAllCars,
    getCar,
    updateCar,
    deleteCarById
};