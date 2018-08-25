const express = require('express');
const app = express();
const accountSid = 'ACfd9e7134b90283d091a1a92ec5ebf1eb';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

app.use(express.static('dist'))

app.post('/sendText', function(req, res) {
    client.messages.create({
        body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
        from: '+13236132041',
        to: '+17736362712'
      })
     .then(message => console.log(message.sid))
     .done();
})

app.listen(5000, () => 
console.log('listening port 5000'))