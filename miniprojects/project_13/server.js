const express = require("express");

const sequelize = require('./config/connection');
const routes = require("./routes");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());

app.use('/', routes);

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log("Listening on port " + PORT);
    });
})