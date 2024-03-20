const { ObjectId } = require('mongodb');
const { Location } = require('../models');

const createLocation = async (locationBody) => {
    return Location.create(locationBody);
}

const getAllLocations = async () => {
    return Location.find();
}

const getLocationById = async (locationId) => {
    const result = await Location.findOne({ _id: ObjectId(locationId) });
    return result
}

const updateLocationById = async (locationId, updateBody) => {
    return Location.findByIdAndUpdate(locationId, updateBody, { new: true });
}

const deleteLocationById = async (locationId) => {
    return Location.findByIdAndDelete(locationId);
}

module.exports = {
    createLocation,
    getAllLocations,
    getLocationById,
    updateLocationById,
    deleteLocationById
};
