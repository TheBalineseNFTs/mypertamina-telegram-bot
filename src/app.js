const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const telegramBot = require('./bot'); // Mengimpor bot Telegram
const otpRoutes = require('./routes/otpRoutes'); // Rute untuk OTP
const telegramRoutes = require('./routes/telegramRoutes'); // Rute untuk Telegram

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

// Rute
app.use('/otp', otpRoutes); // Rute untuk OTP
app.use('/telegram', telegramRoutes); // Rute untuk Telegram

// Rute untuk halaman utama
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

// Menangani kesalahan
app.use((req, res, next) => {
    res.status(404).send("Halaman tidak ditemukan");
});

// Memulai server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});

// Menyediakan endpoint untuk permintaan OTP
app.post('/request_telegram_code', (req, res) => {
    const { phone } = req.body;
    // Logika untuk memproses permintaan OTP ke Telegram
    // Anda bisa menambahkan logika di sini untuk mengirim kode OTP ke pengguna
    res.send({ message: `Permintaan OTP untuk nomor ${phone} telah diproses.` });
});

module.exports = app;
