const TelegramBot = require('node-telegram-bot-api');
const config = require('../config/config');

const bot = new TelegramBot(config.telegramBotToken);

const sendMessageToTelegram = (chatId, message) => {
    bot.sendMessage(chatId, message);
};

module.exports = { sendMessageToTelegram };
