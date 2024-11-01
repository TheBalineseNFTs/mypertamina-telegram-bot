// config/config.js
require('dotenv').config();

const config = {
    telegramBotToken: process.env.TELEGRAM_BOT_TOKEN,
  telegramChatId: process.env.TELEGRAM_CHAT_ID
};

module.exports = config;
