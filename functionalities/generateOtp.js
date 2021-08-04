const nodemailer = require("nodemailer");

const sendOTP = (name, email) => {

  return new Promise((resolve, reject) => {

    const transporter = nodemailer.createTransport({
      service: "hotmail",
      auth: {
        user: process.env.EMAIL_ID,
        pass: process.env.PASSWORD
      }
    });
    
    let otp = (Math.random()).toString();
    otp = otp.slice(otp.length - 4, otp.length);
    
    const mailOptions = {
      from: process.env.EMAIL_ID,
      to: email,
      subject: "Welcome To Chirp - Your Login OTP",
      html: `<h1>Welcome ${name}!</h1><h3>Here is your OTP:</h3><h1>${otp}</h1>`
    };
    
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(otp);
      }
    });

  })

}

module.exports = sendOTP;