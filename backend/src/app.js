const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

// -- CONFIG --
app.set('port', process.env.PORT || 4000);

// -- MIDDLEWARE --
app.use(morgan('dev'));

module.exports = app;