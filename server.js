const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const messageController = require('./server/messageController');
const path = require('path')
const db = require('./server/queries');
const serviceWorker = require('./server/serviceWorker')

const fs = require('file-system');
const files = fs.readdirSync('./dist');
files.forEach(function (ele, i) {
  files[i] = './' + ele
})



// const openDB = self.indexedDB.open("myTestDatabase", 3)

// openDB.onerror = function(event) {
//   console.log('error')
// };
// openDB.onsuccess = function(event) {
//   console.log('db succesfully updated')
// };

// openDB.onupgradeneeded = function(event) {
//   let db = event.target.result;
//   db.createObjectStore("fileArray", {keypath: "v1"});
//   objectStore.createIndex("fileArrays", files)
// }

require('dotenv').config()

app.set('view engine', 'ejs');


//console.log(files)

app.use(express.static(path.join('dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// fs.writeFile("serviceWorker.json", JSON.stringify(files), 'utf8' , function (err) {
//   if (err) {
//     return console.log(err)
//   }
//   console.log('file saved')
// })

app.locals.getBundle = files
console.log(app.locals.getBundle)

app.get('/*', 
serviceWorker.getBundle,
function(req, res) {
  
  res.sendFile(path.join(__dirname, './dist/index.html'), function(err) {  //points to where parcel bundles our app
    if (err) {
      res.status(500).send(err)
    }
  })
}
)

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

module.exports = files;