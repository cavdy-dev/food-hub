const express = require('express');
const RegisterController = require('../controllers/Register');

const router = express.Router();
router.post('/', RegisterController.createUser);
module.exports = router;
