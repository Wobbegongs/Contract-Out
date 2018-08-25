const router = express.Router();
const db = require('./db/queries');
const express = require('express');

router.get('', db.getListOfWorkers); //still need to insert route name
router.get('', db.getIndividualWorkerInfo);
router.post('', db.saveNewJob);
router.post('', db.saveNewWorker);
router.post('', db.saveLoginData);


