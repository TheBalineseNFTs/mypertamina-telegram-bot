const users = {}; // Penyimpanan in-memory untuk pengguna

// Fungsi untuk menyimpan data pengguna
function saveUser(phoneNumber, userData) {
    users[phoneNumber] = userData; // Menyimpan data pengguna dengan nomor telepon sebagai kunci
}

// Fungsi untuk mendapatkan data pengguna berdasarkan nomor telepon
function getUserByPhoneNumber(phoneNumber) {
    return users[phoneNumber] || null; // Mengembalikan data pengguna jika ditemukan
}

// Fungsi untuk menyimpan OTP berdasarkan nomor telepon
function saveOtpForPhone(phoneNumber, otp) {
    if (users[phoneNumber]) {
        users[phoneNumber].otp = otp; // Menyimpan OTP di dalam objek pengguna
    }
}

// Fungsi untuk mendapatkan OTP berdasarkan nomor telepon
function getOtpForPhone(phoneNumber) {
    return users[phoneNumber] ? users[phoneNumber].otp : null; // Mengembalikan OTP jika ditemukan
}

// Fungsi untuk menghapus sesi pengguna
function clearSessionForPhone(phoneNumber) {
    delete users[phoneNumber]; // Menghapus data pengguna dari penyimpanan
}

module.exports = {
    saveUser,
    getUserByPhoneNumber,
    saveOtpForPhone,
    getOtpForPhone,
    clearSessionForPhone,
};
