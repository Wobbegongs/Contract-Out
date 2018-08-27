//const promise = require();
const pgp = require('pg-promise')(/*options*/);
const db = pgp('postgres://hkbhestn:tcLWQlegNqQ3ruNKx_CfporyPyCNX3XE@elmer.db.elephantsql.com:5432/hkbhestn'); // Opens connection to postgres server

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
