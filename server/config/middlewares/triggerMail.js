const fs = require('fs');
let nodemailer = require('nodemailer');
let handlebars = require('handlebars');
const path = require('path');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_SEND_ID,
    pass: process.env.EMAIL_SEND_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// to read the template
let readHTMLFile = (path, callback) => {
  fs.readFile(
    path,
    {
      encoding: 'utf-8',
    },
    (err, html) => {
      if (err) {
        throw err;
        callback(err);
      } else {
        callback(null, html);
      }
    }
  );
};

exports.sendForgetMail = (req, data) => {
  let mailOptions = {
    from: `S2P ${process.env.EMAIL_SEND_ID}`,
    to: null,
    subject: null,
    text: null,
    html: null,
    attachments: null,
  };
  readHTMLFile('templates/forget-pwd.html', async (err, html) => {
    let template = handlebars.compile(html);
    let replacements = data;
    mailOptions.html = template(replacements);
    mailOptions.subject = 'Forget Password';
    mailOptions.to = data.email;
    triggerMail(mailOptions);
  });
};

const triggerMail = (mailOptions) => {
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log('A assign to email has been sent.', info);
    }
  });
};
