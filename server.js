const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const messageController = require('./server/messageController');
const emailController = require('./server/emailController');
const queries = require('./server/queries')
const path = require('path')
const db = require('./server/queries');




require('dotenv').config()

app.set('view engine', 'ejs');

app.use(express.static(path.join('dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, './dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.post('/sendText',
messageController.sendText,
emailController.sendEmail,
  function(req, res) {
    res.send(console.log(req.body));
});

app.post('/userNamePassword', 

)

app.get('/api/workers', 
  db.getListOfWorkers,
); 
//still need to insert route name
app.get('', db.getIndividualWorkerInfo);

app.post('', db.saveNewJob);

app.post('', db.saveNewWorker);

app.post('', db.saveLoginData);





app.listen(5000, () => 
console.log('listening port 5000'))