"use strict";
require('dotenv').config();
const mailer = require("nodemailer");

const transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})

transporter.verify(function (error, success) {
    if(error) {
        console.log(error);
    } else {
        console.log('Time to send some messages')
    }
})

let mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'iparaguirrep@yahoo.com',
    subject: 'This email is a test',
    text: 'This is an automated message to check if we have go this to work'
}

function sendMail(subject, text, link, url) {
    mailOptions.subject = subject;
    mailOptions.html = "<a href=" + url + link + ">" + text + "</a>";
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email has been sent: " + info.response);
        }
    });
}

sendMail();