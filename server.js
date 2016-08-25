const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const smtpTransport = nodemailer.createTransport('SMTP', {
    service: 'Gmail',
    auth: {
        user: 'strotherwebdev@gmail.com',
        pass: 'meuf caro rveg levf'
    }
});

app.get('/', function(req, res) {
    res.sendFile('index.html');
});

app.get('/send', function(req, res) {
    const mailOptions = {
        to: req.body.to,
		from: req.body.name + ' &lt;' + req.body.email + '&gt;',
		subject: req.body.subject,
		message: req.body.message
    };
    smtpTransport.sendMail(mailOptions, function(error, response) {
        if (error) {
            res.end('error');
        }
        else {
            res.end('sent');
        }
    });
});

app.listen(3000);