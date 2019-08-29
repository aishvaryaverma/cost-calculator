const config = require('config');
const nodemailer = require('nodemailer');

// Email Configration
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
        user: config.get('smtpUsername'),
        pass: config.get('smtpPassword')
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
    }
});

exports.transporter = transporter