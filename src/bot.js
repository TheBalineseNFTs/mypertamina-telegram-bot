// src/bot.js
const TelegramBot = require('node-telegram-bot-api');
const config = require('../config/config');

const bot = new TelegramBot(config.telegramBotToken, { polling: true });

bot.onText(/\/getotp/, (msg) => {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  bot.sendMessage(msg.chat.id, `Your OTP code is: ${otp}`);
});

bot.onText(/\/verify (.+)/, (msg, match) => {
  const inputOtp = match[1];
  const isValid = inputOtp === bot.otpCode;
  bot.sendMessage(msg.chat.id, isValid ? "OTP verified!" : "Invalid OTP.");
});
