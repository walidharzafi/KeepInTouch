const nodemailer = require("nodemailer");
const Contact = require("./app/models/contact");

const sendMail = async (req, res) => {
  const { email, subject, text } = req.body;
  const findUser = Contact.find({ email: email });

  if (!findUser) return res.json({ message: "aucune donnée trouvée" });
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "harzafi55@gmail.com",
      pass: "walid1711.",
    },
  });

  const mailOptions = {
    from: "harzafi55@gmail.com",
    to: email,
    subject: subject,
    text: text,
  };
  try {
    await transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    return res.json({ message: "email send" });
  } catch (error) {
    res.json({ error: error });
  }
};

module.exports = sendMail;
