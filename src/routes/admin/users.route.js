const express = require('express');
const router = express.Router();
const { userController } = require('../../controllers');
const verifyToken = require('../../middlewares/verifyToken');

router.get('/', userController.getUsers).all(verifyToken);
router.get('/:userId', userController.getUserById).all(verifyToken);
router.put('/:userId', userController.updateUser).all(verifyToken);
router.delete('/:userId', userController.deleteUser).all(verifyToken);

module.exports = router;