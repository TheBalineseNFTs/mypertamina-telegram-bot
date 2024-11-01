// Contains functions to generate and validate OTPs
const generateOTP = () => {
    return Math.floor(10000 + Math.random() * 90000).toString(); // 6-digit OTP
};

module.exports = { generateOTP };
