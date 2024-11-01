const TelegramBot = require('node-telegram-bot-api');
const config = require('./config/config');
const sessionStore = require('./utils/sessionStore');

// Inisialisasi bot dengan token dari config
const bot = new TelegramBot(config.telegramBotToken, { polling: true });

// Menangani perintah /request_telegram_code
bot.onText(/\/request_telegram_code/, (msg) => {
    const chatId = msg.chat.id;

    // Meminta data input pengguna
    bot.sendMessage(chatId, "Silakan kirimkan Nama Lengkap, Kode Plat, dan Nomor Telepon Anda dalam format:\n/Nama Lengkap, Kode Plat, +62 Nomor Telepon");
});

// Menangani input setelah perintah
bot.onText(/^(.*)$/, (msg) => {
    const chatId = msg.chat.id;
    const userInput = msg.text.split(',');

    if (userInput.length === 3) {
        const fullName = userInput[0].trim();
        const plateCode = userInput[1].trim();
        const phoneNumber = userInput[2].trim();

        const userInfo = {
            fullName: fullName,
            plateCode: plateCode,
            phoneNumber: phoneNumber,
            telegramId: chatId
        };

        // Simpan sesi pengguna
        sessionStore.addSession(chatId, userInfo);
        bot.sendMessage(chatId, "Data Anda telah disimpan!");
    } else {
        bot.sendMessage(chatId, "Format salah! Harap kirimkan data Anda dalam format yang benar.");
    }
});

// Menangani perintah /cekk untuk memeriksa sesi
bot.onText(/\/cekk/, (msg) => {
    const chatId = msg.chat.id;
    const sessionData = sessionStore.getSession(chatId);

    if (sessionData) {
        const response = `Nama Lengkap: ${sessionData.fullName}\nKode Plat: ${sessionData.plateCode}\nNomor Telepon: ${sessionData.phoneNumber}`;
        bot.sendMessage(chatId, response);
    } else {
        bot.sendMessage(chatId, "Tidak ada data sesi yang ditemukan.");
    }
});

// Menangani perintah /keluar untuk menghapus sesi
bot.onText(/\/keluar/, (msg) => {
    const chatId = msg.chat.id;
    sessionStore.removeSession(chatId);
    bot.sendMessage(chatId, "Anda telah keluar dari sesi.");
});

// Menangani perintah lainnya sesuai kebutuhan
// Misalnya, Anda bisa menambahkan perintah lain di sini...

module.exports = bot;
