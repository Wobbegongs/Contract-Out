const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const messageController = require('./server/messageController');


app.use(express.static('dist'))
app.use(bodyParser.json())

app.post('/sendText', 
messageController.sendText,

function(req, res) {
    res.send('hi')

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