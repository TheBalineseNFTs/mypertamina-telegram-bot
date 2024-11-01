// src/routes/telegramRoutes.js
const express = require('express');
const router = express.Router();
const telegramController = require('../controllers/telegramController');

router.post('/sendOtp', telegramController.sendOtpMessage);

module.exports = router;
