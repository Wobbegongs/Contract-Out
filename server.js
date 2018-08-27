const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const messageController = require('./server/messageController');
const path = require('path')
const db = require('./server/queries');

require('dotenv').config()

app.set('view engine', 'ejs');

app.use(express.static(path.join('dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, './dist/index.html'), function(err) {  //points to where parcel bundles our app
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.post('/sendText',
messageController.sendText,
//emailController.sendEmail,
  function(req, res) {
    res.send(console.log(req.body));
});

app.post('/userNamePassword', 

)

app.post('/api/workers', 
  db.getListOfWorkers,
); 
// List of queries to be written in quieries.js
app.get('', db.getIndividualWorkerInfo);

app.post('', db.saveNewJob);

app.post('', db.saveNewWorker);

app.post('', db.saveLoginData);





app.listen(5000, () => 
console.log('listening port 5000'))