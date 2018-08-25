require('dotenv').config();
const messageController = {};
const accountSid = process.env.auth1 //account number to the online phone number
const authToken = process.env.auth; //24 hour authentication token, if this was production level it would be on our local hardDrive
const client = require('twilio')(accountSid, authToken);




//middleware that sends a twilio text message
messageController.sendText = (req, res, next) => {
    client.messages.create({
        body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
        from: '+13236132041',
        to: '+17736362712'
      })
     .then(message => console.log(message.sid))
     .next();
}







module.exports = messageController