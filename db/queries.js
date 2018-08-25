const promise = require();
const options = {
    promiseLib: promise
};

const pgp = require('pg-promise')();
const postgresConnectionObject = { //layout of postgress login
    port: 5432,
    database: 'my-database-name',
    user: 'user-name',
    password: 'user-password'
};
const db = pgp(postgresConnectionObject);

function getListOfWorkers(req, res, next) {
    
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

}
