const express = require("express");

const movieApp = require('./movies');

const app = express();

app.use('/movies', movieApp);

module.exports = app;