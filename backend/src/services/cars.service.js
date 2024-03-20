const { ObjectId } = require('mongodb');
const { Vehicles } = require('../models');

const addCar = async (carBody) => {
    return Vehicles.create(carBody);
};

const getAllCars = async () => {
    return Vehicles.find();
};

const getCar = async (carId) => {
    const result = await Vehicles.findOne({ _id: ObjectId(carId) });
    return result;
}

const updateCar = async (carId, updateBody) => {
    return Vehicles.findByIdAndUpdate(carId, updateBody, { new: true });
}

const deleteCarById = async (carId) => {
    return Components.findByIdAndUpdate(carId, { is_deleted: true }, { new: true });
};


module.exports = {
    addCar,
    getAllCars,
    getCar,
    updateCar,
    deleteCarById
};