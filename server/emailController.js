const emailController = {}; //initializing export object
const nodemailer = require('nodemailer'); 


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'greg.domingue1@gmail.com',
      pass: process.env.emailPass
    }
  });
  
  const mailOptions = {
    from: 'greg.domingue1@gmail.com',
    to: 'greg.domingue1@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
emailController.sendEmail = (req, res, next) => { 
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + JSON.stringify(info)); //info is an object that contains info about the email if it was succesfully sent as an object
    }
  });
  next();
};


module.exports = emailController


