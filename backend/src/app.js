const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

// -- CONFIG --
app.set('port', process.env.PORT || 4000);

// -- MIDDLEWARE --
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// -- ROUTES --
app.get(('/'), (req, res) => {
    res.send('Welcome!');
})

module.exports = app;