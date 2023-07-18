const diagnostics = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');
const path = require("path");

// GET Route for retrieving diagnostic information
diagnostics.get('/', (req, res) => {
  // TODO: Logic for sending all the content of db/diagnostics.json
  const pathname = path.resolve(__dirname, "..", "db", "diagnostics.json");
  readFromFile(pathname).then((data) => {
    //const obj = JSON.parse(data.toString());
    //res.json(obj);

    res.set('Content-Type', 'application/json');
    res.send(data.toString());
  });
});

// POST Route for a error logging
diagnostics.post('/', (req, res) => {
  // TODO: Logic for appending data to the db/diagnostics.json file
  const insertObject = {
    time: (new Date()).getTime(),
    error_id: uuidv4(),
    errors: req.body.errors,
  };

  const pathname = path.resolve(__dirname, "..", "db", "diagnostics.json");

  readAndAppend(insertObject, pathname);

  res.end();
});

module.exports = diagnostics;
