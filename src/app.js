'use strict';

const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
const cors = require('./middlewars/cors');
const routes = require('./routes');
const errorHandlers = require('./middlewars/errorHandlers');
const config = require('config');

console.log(config);

/**
 * For security purposes, it is reccommended
 * to remove the 'X-Powered-By' HTTP response header.
 */
app.disable('x-powered-by');

app.use(cors);

app.use(bodyParser.json({limit: '30mb'}));
app.use(bodyParser.urlencoded({
  limit: '30mb',
  extended: false
}));

app.use(cookieParser());

app.use('/', routes);

app.use(errorHandlers);

module.exports = app;