const fs = require("fs");
let nodemailer = require("nodemailer");
let handlebars = require("handlebars");
const path = require("path");

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_SEND_ID,
    pass: process.env.EMAIL_SEND_PASSWORD,
  },
  // tls: {
  //   rejectUnauthorized: false,
  // },
});

// to read the template
let readHTMLFile = (path, callback) => {
  fs.readFile(
    path,
    {
      encoding: "utf-8",
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
  return new Promise((resolve, reject) => {
    let mailOptions = {
      from: `${process.env.EMAIL_SEND_ID}`,
      to: data.email,
      subject: data.subject,
      text: null,
      html: null,
      attachments: null,
    };

    readHTMLFile(
      `${__dirname}/../../models/helpers/templates/${data.template}`,
      (err, html) => {
        if (err) {
          console.error("Error reading email template:", err);
          return reject(err);
        }
        try {
          let template = handlebars.compile(html);
          mailOptions.html = template(data);

          exports
            .triggerMailOutlook(mailOptions)
            .then((info) => {
              console.log("Forgot password email sent successfully.");
              resolve(info);
            })
            .catch((error) => {
              console.error("Error sending email:", error);
              reject(error);
            });
        } catch (error) {
          console.error("Error compiling email template:", error);
          reject(error);
        }
      }
    );
  });
};

exports.triggerMailOutlook = (mailOptions) => {
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log("Email sending failed:", err);
        reject(err);
      } else {
        console.log("Email sent:", info.response);
        resolve(info);
      }
    });
  });
};
