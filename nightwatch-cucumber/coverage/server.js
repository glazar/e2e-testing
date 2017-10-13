const coverage = require('istanbul-middleware');
const express = require('express');
const config = require('./config');

const app = express();
app.use('/coverage', coverage.createHandler());
app.listen(config.port);