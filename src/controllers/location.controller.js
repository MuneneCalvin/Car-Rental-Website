const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { locationServices } = require('../services');

const createLocation = catchAsync(async (req, res) => {
    try {
        const result = await locationServices.createLocation(req.body);
        if (!result) return res.status(httpStatus.BAD_REQUEST).json({ success: false, message: 'Create Failed!', data: {} });
        res.status(201).json({ success: true, message: 'Success', data: result });
    } catch (error) {
        console.log("ERROR - ", error)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: 'Internal Server Error', data: {} });
    }
});

const getAllLocations = catchAsync(async (req, res) => {
    try {
        const result = await locationServices.getAllLocations();
        if (!result) return res.status(httpStatus.BAD_REQUEST).json({ success: false, message: 'No data available', data: {} });
        res.status(200).json({ success: true, message: 'Success', data: result });
    } catch (error) {
        console.log("ERROR - ", error)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: 'Internal Server Error', data: {} });
    }
});

const getLocationById = catchAsync(async (req, res) => {
    try {
        const result = await locationServices.getLocationById(req.params.locationId);
        if (!result) return res.status(httpStatus.BAD_REQUEST).json({ success: false, message: 'No data available!', data: {} });
        res.status(200).json({ success: true, message: 'Success', data: result });
    } catch (error) {
        console.log("ERROR - ", error)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: 'Internal Server Error', data: {} });
    }
});

const updateLocationById = catchAsync(async (req, res) => {
    try {
        const result = await locationServices.updateLocationById(req.params.locationId, req.body);
        if (!result) return res.status(httpStatus.BAD_REQUEST).json({ success: false, message: 'Update Failed!', data: {} });
        res.status(200).json({ success: true, message: 'Success', data: result });
    } catch (error) {
        console.log("ERROR - ", error)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: 'Internal Server Error', data: {} });
    }
});

const deleteLocationById = catchAsync(async (req, res) => {
    try {
        const result = await locationServices.deleteLocationById(req.params.locationId);
        if (!result) return res.status(httpStatus.BAD_REQUEST).json({ success: false, message: 'Delete Failed!', data: {} });
        res.status(200).json({ success: true, message: 'Success', data: result });
    } catch (error) {
        console.log("ERROR - ", error)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: 'Internal Server Error', data: {} });
    }
});

module.exports = {
    createLocation,
    getAllLocations,
    getLocationById,
    updateLocationById,
    deleteLocationById
};