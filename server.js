const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const messageController = require('./server/messageController');
const emailController = require('./server/emailController');



require('dotenv').config()

app.set('view engine', 'ejs');

app.use(express.static('dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/sendText', 
messageController.sendText,
emailController.sendEmail,
  function(req, res) {
    res.send(console.log(req.body));
});

app.post('/userNamePassword', 

)





app.listen(5000, () => 
console.log('listening port 5000'))