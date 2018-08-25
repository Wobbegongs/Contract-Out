const messageController = {};
const accountSid = 'ACfd9e7134b90283d091a1a92ec5ebf1eb'; //account number to the online phone number
const authToken = '65e624ce3481b398e40b1db5b4719b20'; //24 hour authentication token, if this was production level it would be on our local hardDrive
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