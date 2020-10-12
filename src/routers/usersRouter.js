const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/userController');

//router
router.get('/', userController.getUser);


module.exports = router;