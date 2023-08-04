require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');

const app = express();

const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cookieParser());

const auth = (req, res, next) => {
    if (!req.cookies.token) {
        res.status(401).end();
        return;
    }

    const token = req.cookies.token;
    const data = jwt.verify(token, process.env.JWT_SECRET);

    if (!data) {
        res.status(401).end();
        return;
    }

    req.tokenData = data;

    next();
}

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (password !== process.env.ADMIN_PASSWORD) {
        res.status(401).end();
        return;
    }

    const token = jwt.sign({
        loggedIn: true,
        username,
    }, process.env.JWT_SECRET);

    res.cookie("token", token);

    res.status(200).end();
});

app.get("/me", auth, (req ,res) => {
    res.status(200).send(req.tokenData.username);
});

app.get("/", (req, res) => {
    res.sendFile("index.html");
});

app.listen(port, () => {
    console.log("Listening on port " + port);
});