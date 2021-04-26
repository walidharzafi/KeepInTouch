const nodemailer = require("nodemailer");

const smtpTransport = require('nodemailer-smtp-transport');
const Contact = require("./app/models/contact");
const transporter = nodemailer.createTransport(
  smtpTransport({
    host: 'smtp.gmail.com',
    auth: {
      type: 'custom',
      user: "harzafi55@gmail.com",
      pass: "walid1711.",
    },
  })
);
const sendMail = async (req, res) => {
  const { id } = req.params;
  const { message } = req.body;
  // console.log(message);
  try {
    const currentContact = await Contact.findOne({ _id: id });
    if (currentContact) {
      const mailOptions = {
        from: "harzafi55@gmail.com",
        to: currentContact.email,
        subject: 'Mail',
        text: message,
      };
      const envoiMail = await transporter.sendMail(mailOptions);
      if (envoiMail) res.status(200).json('Mail sent');
    }
  } catch (error) {
    res.json({ error: error });
  }
};

module.exports = sendMail;
