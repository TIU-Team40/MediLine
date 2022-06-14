const nodemailer = require("nodemailer");

const mailHelper = async (option) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    auth: {
      user: process.env.GMAIL_USER, // generated ethereal user
      pass: process.env.GMAIL_PASS, // generated ethereal password
    },
  });

  const message = {
    from: "'UnSocial' ayushsharma20800@gmail.com", // sender address
    to: option.to, // list of receivers
    subject: option.subject, // Subject line
    html: option.text,
  };

  // send mail with defined transport object
  await transporter.sendMail(message);
};

module.exports = mailHelper;
