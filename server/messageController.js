require('dotenv').config();
const messageController = {}; 
const accountSid = process.env.auth1 //account number to the online phone number
const authToken = process.env.auth; //24 hour authentication token, if this was production level it would be on our local hardDrive
const client = require('twilio')(accountSid, authToken);




//middleware that sends a twilio text message
messageController.sendText = (req, res, next) => {
  const numberArr = [];
  
  codesmithNumberArr.forEach(function(ele){
    client.messages.create({
    body: 'hello, There is a job you may be interested in check your email for a link, because Twilio thinks I am a bot',
    from: '+15202147880', //Twilio accounts phone number, you can request more.
    to: ele
    })
  })
  next();
}







module.exports = messageController