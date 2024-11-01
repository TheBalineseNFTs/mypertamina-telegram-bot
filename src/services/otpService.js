// src/services/otpService.js
const sessionStore = require('../utils/sessionStore');

exports.generateOtp = () => {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  sessionStore.setOtp(otp);
  return otp;
};

exports.verifyOtp = (otp) => {
  return sessionStore.getOtp() === otp;
};
