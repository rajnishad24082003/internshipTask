let express = require("express");
let router = express.Router();
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "rajnishad24082003@gmail.com",
        pass: process.env.EmailPass,
      },
      secureConnection: "false",
      tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
      },
    });
    let formdata = req.body;
    let formdataString = JSON.stringify(formdata);
    let info = await transporter.sendMail({
      from: '"Raj Nishad" <rajnishad24082003@gmail.com>', // sender address
      to: "assignment@spreadinindia.in , rohitnishad119763@gmail.com,rajnishad8007034055@gmail.com", // list of receivers
      subject: "internship task contact form submission from Raj Nishad", // Subject line
      text: formdataString, // plain text body
      html: `<!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>Form Submission</title>
        </head>
        <body style="font-family: Arial, sans-serif; font-size: 16px;">
          <h1 style="color: navy; font-size: 24px;">Form Submission</h1>
          <p style="color: #333;">Greetings,</p>
          <p style="color: #333;">A message has been submitted with the following information:</p>
          <ul style="list-style: none; padding: 0;">
            <li style="margin-bottom: 10px;"><strong>Name:</strong> ${formdata.name}</li>
            <li style="margin-bottom: 10px;"><strong>Email:</strong> ${formdata.email}</li>
            <li style="margin-bottom: 10px;"><strong>Phone:</strong> ${formdata.phone}</li>
          </ul>
          <hr style="border: 1px solid #ddd;">
          <h3 style="color: navy; font-size: 20px;">Message</h3>
          <p style="color: #333;">${formdata.message}</p>
        </body>
      </html>`, // html body
    });
    res.json(info);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

module.exports = router;
