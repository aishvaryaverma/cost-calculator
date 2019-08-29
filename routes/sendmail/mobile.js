const nodemailer = require('./transporter');
const fs = require('fs');

let sendAdminEmail = bodyData => {

    const newStepsData = ['Web','Custom','Username & Password','Yes','Yes','Yes','Yes','Payment Gateway',['one','two','three']];
    const { email } = bodyData;
    const newBodyData = { ...bodyData, newStepsData };
    const template = fs.readFileSync(`${__dirname}/admin.html`, 'utf-8');
    const messageBody = replaceAdminTemplate(template, newBodyData);
    
    // Lets send email with nodemailer
    let message = {
        from: email,
        to: 'averma@clavax.us',
        subject: 'Request to make an app',
        html: messageBody
    };
    nodemailer.transporter.sendMail(message);

};

let sendUserEmail = bodyData => {

    const { firstName, email } = bodyData;
    const template = fs.readFileSync(`${__dirname}/user.html`, 'utf-8');
    const messageBody = replaceUserTemplate(template, firstName);
    
    // Lets send email with nodemailer
    let message = {
        from: 'aashuclavax@gmail.com',
        to: email,
        subject: "Let's Build your App",
        html: messageBody
    };
    nodemailer.transporter.sendMail(message);

};


function replaceAdminTemplate(originalHtml, data) {
    let output = originalHtml.replace(/{%FIRSTNAME%}/g, data.firstName);
    output = output.replace(/{%LASTNAME%}/g, data.lastName);
    output = output.replace(/{%EMAIL%}/g, data.email);
    output = output.replace(/{%MOBILE%}/g, data.mobile);
    output = output.replace(/{%MESSAGE%}/g, data.message);
    output = output.replace(/{%PRICE%}/g, data.price);
    output = output.replace(/{%PLATFORM%}/g, data.newStepsData[0]);
    output = output.replace(/{%DESIGN%}/g, data.newStepsData[1]);
    output = output.replace(/{%USERREGISTRATION%}/g, data.newStepsData[2]);
    output = output.replace(/{%ADMINFEATURES%}/g, data.newStepsData[3]);
    output = output.replace(/{%SERVICEINTE%}/g, data.newStepsData[4]);
    output = output.replace(/{%DBMANAGEMENT%}/g, data.newStepsData[5]);
    output = output.replace(/{%SECURITY%}/g, data.newStepsData[6]);
    output = output.replace(/{%APPBILLING%}/g, data.newStepsData[7]);
    output = output.replace(/{%EXCLUSIVEFEATURES%}/g, data.newStepsData[8]);
    return output;
};

function replaceUserTemplate(originalHtml, firstName) {
    let output = originalHtml.replace(/{%FIRSTNAME%}/g, firstName);
    return output;
};

exports.sendAdminEmail = sendAdminEmail
exports.sendUserEmail = sendUserEmail