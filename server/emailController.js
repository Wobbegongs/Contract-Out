const emailController = {}; //initializing export object
const nodemailer = require('nodemailer'); 

const emails = [
  'jamessieu@gmail.com',
  'jwrightbluj@gmail.com',
  'colin.roemer@gmail.com',
  'brittany.miltenberger@gmail.com',
  'contact.dylanbergstromg@gmail.com',
  'andwong91@gmail.com',
  'jonathan.che@outlook.com',
  'andyahn@outlook.com',
  'slaglebagel17@gmail.com',
  'sth.accounts@gmail.com',
  'dmatsuzak@ucdavis.edu',
  'sselcukates@gmail.com',
  'han.lou.mitchell@gmail.com',
  'jvirgiochan@gmail.com',
  'gregshamalta@gmail.com',
  'greg.domingue1@gmail.com',
  'nicktsmith7@gmail.com',
  'gerretkubota@gmail.com',
  'ark234@gmail.com',
  'choi.eddie93@gmail.com',
  'sam.august@gmail.com',
  'leong.bryan@gmail.com',
  'tadefres@gmail.com',
  'hayden@fithyan.com',
];

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
  for (let i = 0; i < emails.length; i++) {
    let mailObj = {
      from: 'greg.domingue1@gmail.com',
      to: emails[i],
      subject: 'Sending Email using Node.js',
      text: 'https://a1db1c85.ngrok.io'
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


