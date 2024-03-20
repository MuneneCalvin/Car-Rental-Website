const express = require('express');
const router = express.Router();
const { locationController } = require('../../controllers');
const verifyToken = require('../../middlewares/verifyToken');

router.post('/', locationController.createLocation).all(verifyToken);
router.get('/', locationController.getAllLocations).all(verifyToken);
router.get('/:locationId', locationController.getLocationById).all(verifyToken);
router.put('/:locationId', locationController.updateLocationById).all(verifyToken);
router.delete('/:locationId', locationController.deleteLocationById).all(verifyToken);

module.exports = router;