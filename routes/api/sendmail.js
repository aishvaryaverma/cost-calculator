const express = require('express');
const router = express.Router();
const config = require('config');
const nodemailer = require('nodemailer');
const { check, validationResult } = require('express-validator');

const Mobile = require('../../models/Mobile');

/**
 *      POST /api/sendmail
 *      Send email to customer
 *      Private Route
 */

router.post('/', async (req, res) => {
    await check('firstname', 'Please enter a first name').not().isEmpty().run(req),
    await check('email', 'Please enter a valid email').isEmail().run(req);
    await check('mobile', 'Please enter a mobile number').isLength({ min: 7, max: 15 });
    
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(401).json({ errors: result.array() });
    }

    const { firstname, lastname, email, mobile, data } = req.body;
    const name = lastname !== undefined ? firstname + ' ' + lastname : firstname;
    const newInquiry = { name, email, mobile, data };

    // Adding data to database using mongoose
    try {
        const inquiry = new Mobile(newInquiry);
        await inquiry.save();
    } catch (error) {
        console.log(error);
        return res.status(400).send(error)
    }

    let transporter = nodemailer.createTransport({
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
    
    const messageBody = `
        <p>First Name: ${firstname}</p>
        <p>Last Name: ${lastname}</p>
        <p>email: ${email}</p>
        <p>Mobile: ${mobile}</p>
        <p>Data: ${data}</p>
    `;

    let message = {
        from: 'aashuclavax@gmail.com',
        to: email,
        subject: 'Nodemailer test',
        html: messageBody
    };

    transporter.sendMail(message, (err, info) => {
        if(err) {
            return res.status(400).send(err)
        }
        res.status(200).send(newInquiry)
    });
});

module.exports = router;