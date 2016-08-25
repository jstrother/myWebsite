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
        to: req.query.to,
		from: req.query.name + ' &lt;' + req.query.email + '&gt;',
		subject: req.query.subject,
		message: req.query.message
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