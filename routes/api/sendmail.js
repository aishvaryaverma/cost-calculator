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
    
    // Validation
    await check('firstName', 'Please enter a first name').not().isEmpty().run(req),
    await check('email', 'Please enter a valid email').isEmail().run(req);
    await check('mobile', 'Please enter a mobile number').isLength({ min: 7, max: 15 });
    const result = validationResult(req);
    
    // Throwing error if found any
    if (!result.isEmpty()) {
        return res.status(401).json({ errors: result.array() });
    }

    // Get data from request body
    const { firstName, lastName, email, mobile, stepData } = req.body;

    // Data object
    const name = lastName !== undefined ? firstName + ' ' + lastName : firstName;
    const newInquiry = { name, email, mobile, stepData };
    
    try {
        // Adding data to database using mongoose
        const inquiry = new Mobile(newInquiry);
        await inquiry.save();

        // Send Confimation Email
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
            <p>First Name: ${firstName}</p>
            <p>Last Name: ${lastName}</p>
            <p>email: ${email}</p>
            <p>Mobile: ${mobile}</p>
            <p><b>Data:</b></p>
            <table width="400" border="1" cellpadding="5" style="border-color: #ddd;">
                <tbody>
                    <tr>
                        <td>Application_Platform</td>
                        <td>${stepData[0].Application_Platform}</td>
                    </tr>
                </tbody>
            </table>
        `;

        let message = {
            from: 'aashuclavax@gmail.com',
            to: email,
            subject: 'Nodemailer test',
            html: messageBody
        };

        transporter.sendMail(message, (err, info) => {
            if(err) {
                return res.status(400).json(err)
            }
        });

        // Send Response
        res.status(200).json(newInquiry);
    } catch (err) {
        console.error(err);

        res.status(500).send('Server Error')
    }
    
});

module.exports = router;