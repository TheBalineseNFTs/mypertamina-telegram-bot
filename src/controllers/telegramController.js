// Handles Telegram bot commands and interactions
const { sendMessageToTelegram } = require('../services/telegramService');

exports.requestTelegramCode = (req, res) => {
    const { fullName, platCode, phoneNumber } = req.body;
    const message = `Received request:\nFull Name: ${fullName}\nPlat Code: ${platCode}\nPhone Number: ${phoneNumber}`;
    sendMessageToTelegram(process.env.TELEGRAM_CHAT_ID, message);
    res.status(200).json({ message: "Telegram code requested." });
};

// Implement other Telegram-related functions as needed...
