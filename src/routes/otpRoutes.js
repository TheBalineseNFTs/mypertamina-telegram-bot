const express = require('express');
const router = express.Router();
const otpController = require('../controllers/otpController');

router.post('/generate', otpController.generateAndSendOTP);

// Implement other routes related to OTP...

module.exports = router;
