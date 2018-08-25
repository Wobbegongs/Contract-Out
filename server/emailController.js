
const emailController = {};
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'greg.domingue1@gmail.com',
      pass: '329AszM:('
    }
  });
  
  const mailOptions = {
    from: 'greg.domingue1@gmail.com',
    to: 'jamessieu@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
emailController.sendEmail = (req, res, next) => { 
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
       console.log('Email sent: ' + info.response);
    }
   });
};


module.exports = emailController


