const nodemailer = require('./transporter');

let sendAdminEmail = function(bodyData) {
    const { firstName, lastName, email, mobile, message, stepsData } = bodyData;
    try {
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
                        <td>test</td>
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

        nodemailer.transporter.sendMail(message, (err, info) => {
            if(err) {
                return res.status(400).json(err)
            }
        });
    } catch (err) {
        return res.status(500).send('Error sending emails')
    }
};

exports.sendAdminEmail = sendAdminEmail