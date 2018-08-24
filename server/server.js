const express = require('express');
const path = require('path');
const twilio = require('twilio');
const dotenv = require('dotenv');
const app = express();
const file = 'index.html';
const options = {};
const bundler = new Bundler(file, options);

cfg.accountSid = process.env.TWILIO_ACCOUNT_SID;
cfg.authToken = process.env.TWILIO_AUTH_TOKEN;
cfg.sendingNumber = process.env.TWILIO_NUMBER;

app.use(bundler.middleware);
app.use(twilioNotificatoins.notifyOnError);

app.listen(3000);