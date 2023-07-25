const express = require("express");
const db = require('../db/connection');

const app = express();

app.get('/', (req, res) => {
    const query = "select * from movies";
    db.query(query, (err, response) => {
        if (err) {
            console.error(err);
            res.status(500).end();
        } else {
            const responseString = JSON.stringify(response);
            res.send(responseString);
        }
    });
});

app.post('/', (req, res) => {
    const { title, aarp_rating, rotten_tomatoes_rating } = req.body;

    const query = "insert into movies(title, aarp_rating, rotten_tomatoes_rating) values(?, ?, ?)";

    db.query(query, [title, aarp_rating, rotten_tomatoes_rating], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).end();
        } else {
            res.send(`${result.insertId}`);
        }
    });
});

module.exports = app;
