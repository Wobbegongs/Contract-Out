const accountSid = 'ACfd9e7134b90283d091a1a92ec5ebf1eb';
const authToken = '65e624ce3481b398e40b1db5b4719b20'
const client = require('twilio')(accountSid, authToken);

client.messages.create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+13236132041',
     to: '+17736362712'
   })
  .then(message => console.log(message.sid))
  .done();