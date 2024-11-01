// src/utils/sessionStore.js
let otpCode = null;

exports.setOtp = (otp) => {
  otpCode = otp;
};

exports.getOtp = () => {
  return otpCode;
};
const sessions = {};

// Menambahkan sesi pengguna baru
function addSession(chatId, userInfo) {
    sessions[chatId] = userInfo;
}

// Mendapatkan informasi sesi pengguna berdasarkan chatId
function getSession(chatId) {
    return sessions[chatId];
}

// Menghapus sesi pengguna berdasarkan chatId
function removeSession(chatId) {
    delete sessions[chatId];
}

// Mengupdate sesi pengguna
function updateSession(chatId, newUserInfo) {
    if (sessions[chatId]) {
        sessions[chatId] = { ...sessions[chatId], ...newUserInfo };
    }
}

// Mendapatkan semua sesi pengguna (jika diperlukan)
function getAllSessions() {
    return sessions;
}

module.exports = {
    addSession,
    getSession,
    removeSession,
    updateSession,
    getAllSessions,
};
