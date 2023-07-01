const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const config = require("../services/config");
const { getUserWithId } = require("../models/user.model");

const emailTemplate = fs.readFileSync(
  path.join(__dirname, "..", "services", "email.html"),
  "utf-8"
);

const checkVerifiedUser = async function (req, res, next) {
  const userId = res.locals.id;
  const user = await getUserWithId(userId);
  console.log(user);
  if (user?.verified === true) {
    next();
  } else {
    const verificationToken = jwt.sign(
      { id: user._id },
      config.EMAIL_VERIFY_SECRET,
      {
        expiresIn: "1h",
      }
    );

    const verificationUrl = `http://localhost:8000/verify/${verificationToken}`;

    //Nodemailer email:
    const emailContent = emailTemplate
      .replace("[[verificationUrl]]", verificationUrl)
      .replace("[[verificationUrl]]", verificationUrl)
      .replace("[[name]]", user.firstName);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: config.HOST_ID,
        pass: config.HOST_PASS,
      },
    });

    const mailOptions = {
      from: config.HOST_ID,
      to: user.email,
      subject: "Email Verification",
      html: emailContent,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.status(500).json({ error: "Email not verified" });
      } else {
        res.status(403).json({
          message: "Verification Email sent. Please verify your email",
        });
      }
    });
  }
};

module.exports = {
  checkVerifiedUser,
};
