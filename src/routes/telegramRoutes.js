const express = require('express');
const router = express.Router();
const telegramController = require('../controllers/telegramController');

router.post('/request_telegram_code', telegramController.requestTelegramCode);

// Implement other routes related to Telegram commands...

module.exports = router;
