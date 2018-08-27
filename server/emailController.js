const emailController = {}; //initializing export object
const nodemailer = require('nodemailer'); 



const transporter = nodemailer.createTransport({  //the email account that the emails will be sent from
  service: 'gmail',
  auth: {
    user: 'greg.domingue1@gmail.com',
    pass: process.env.emailPass //place the password of the mail servicec you are using in the ignored file .env. Everyone on your team will have to 
    // plcae the password there manually as .env is an ignored file.
  }
});
//What the mail object looks like.

// const mailOptions = { 
//   from: 'greg.domingue1@gmail.com',
//   to: 'greg.domingue1@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

emailController.sendEmail = (req, res, next) => {
  const emailList = []; //should be populated with the list of emails to be sent out

  for (let i = 0; i < emails.length; i++) {
    let mailObj = {
      from: 'greg.domingue1@gmail.com', //insert the email address/service you will be using here
      to: emails[i],
      subject: 'Sending Email using Node.js',
      text: '' //place what you would like to send in the email here.
    }
    transporter.sendMail(mailObj, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + JSON.stringify(info)); //info is an object that contains info about the email if it was succesfully sent as an object
      }
    });
  } 
  next();
};


module.exports = emailController


