// src/app.js
const express = require('express');
const app = express();
const otpRoutes = require('./routes/otpRoutes');
const telegramRoutes = require('./routes/telegramRoutes');

app.use(express.json());
app.use('/otp', otpRoutes);
app.use('/telegram', telegramRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
