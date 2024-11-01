// src/controllers/telegramController.js
const telegramService = require('../services/telegramService');

exports.sendOtpMessage = (req, res) => {
  const otp = req.body.otp;
  telegramService.sendOtp(otp);
  res.status(200).send("OTP sent via Telegram");
};
