const express = require("express");
const mysql = require("mysql2");

const routes = require("./routes");

const port = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', routes);

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});