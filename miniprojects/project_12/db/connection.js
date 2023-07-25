const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    password: 'changeme',
    user: 'root',
    database: 'movies_db',
});

module.exports = db;