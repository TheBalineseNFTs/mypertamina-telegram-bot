// src/utils/sessionStore.js
let otpCode = null;

exports.setOtp = (otp) => {
  otpCode = otp;
};

exports.getOtp = () => {
  return otpCode;
};
