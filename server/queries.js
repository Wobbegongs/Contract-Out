//const promise = require();
const pgp = require('pg-promise')(/*options*/);
const db = pgp('postgres://hkbhestn:tcLWQlegNqQ3ruNKx_CfporyPyCNX3XE@elmer.db.elephantsql.com:5432/hkbhestn');

/*
const connection = require('./db-path.js')
const pgp = require('pg-promise')(/*options);
const db = pgp(connection);

module.exports = db;
*/

// const postgresConnectionObject = { //layout of postgress login
//     port: 5432,
//     database: 'my-database-name',
//     user: 'user-name',
//     password: 'user-password'
// };

function getListOfWorkers(req, res, next) {
    db.query('SELECT name, email, phone_number FROM subcontractor')
        .then((rows) => res.send(rows))
};

function getIndividualWorkerInfo(req, res, next) {
    
};

function saveNewJob(req, res, next) {
    
};

function saveNewWorker(req, res, next) {
    
};

function saveLoginData(req, res, next) {

};


module.exports = {
    getListOfWorkers: getListOfWorkers,
    getIndividualWorkerInfo: getIndividualWorkerInfo,
    saveNewJob: saveNewJob,
    saveNewWorker: saveNewWorker,
    saveLoginData: saveLoginData,
    pgp,

}
