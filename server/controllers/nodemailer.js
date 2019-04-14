const { CREDS_EMAIL, CREDS_PASS } = process.env;
const nodemailer = require('nodemailer');

module.exports = {
  sendEmail: (req, res) => {
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: CREDS_EMAIL,
        pass: CREDS_PASS
      }
    });

    let mailOptions = {
      from: req.body.email, // sender address
      to: 'hunterluker1992@gmail.com', // list of receivers
      subject: `${req.body.name}`, // Subject line
      html: `<p>${req.body.message}</p>` // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      res.sendStatus(200);
    });
  }
};
