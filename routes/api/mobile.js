const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Mobile = require('../../models/Mobile');
const sendMail = require('../sendmail/mobile');

/**
 *      POST /api/sendmail
 *      Send email to customer
 *      Public route
*/
router.post('/', async (req, res) => {

    // Validation
    await check('firstName', 'Please enter a first name').not().isEmpty().run(req);
    await check('lastName', 'Please enter a last name').not().isEmpty().run(req);
    await check('email', 'Please enter a valid email address').isEmail().run(req);
    await check('mobile', 'Please enter a mobile number').isLength({ min: 7, max: 15 }).run(req);
    await check('stepsData', 'User Step data is required').not().isEmpty().run(req);
    const result = validationResult(req);
    
    // Throwing error if required field are missing
    if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
    }

    // Get data from request body
    const { firstName, lastName, email, mobile, message, stepsData } = req.body;
    
    try {

        // Adding data to database using mongoose
        const inquiry = new Mobile({firstName, lastName, email, mobile, message, stepsData });
        await inquiry.save();
        
        // Send email's
        sendMail.sendAdminEmail(req.body);
        sendMail.sendUserEmail(req.body);

        // Sending success response msg
        res.status(200).json({ msg: 'Request proceed successfully' });

    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error')
    }

});

module.exports = router;