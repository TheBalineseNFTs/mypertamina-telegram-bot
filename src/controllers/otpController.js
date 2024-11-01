// src/controllers/otpController.js
const otpService = require('../services/otpService');

exports.requestOtp = (req, res) => {
  const otp = otpService.generateOtp();
  // Store OTP and send it back in response
  res.status(200).json({ otp });
};

exports.verifyOtp = (req, res) => {
  const { otp } = req.body;
  const isValid = otpService.verifyOtp(otp);
  res.status(200).json({ isValid });
};
