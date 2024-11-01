// src/services/telegramService.js
const TelegramBot = require('node-telegram-bot-api');
const config = require('../../config/config');

const bot = new TelegramBot(config.telegramBotToken, { polling: true });

exports.sendOtp = (otp) => {
  bot.sendMessage(config.telegramChatId, `Your OTP code is: ${otp}`);
};
