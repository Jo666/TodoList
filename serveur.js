require('dotenv').config();
const express = require("express");
const router = require('./mainRouter');
const app = express();
const cors = require('cors');

const port = process.env.PORT
const host = process.env.host

const session = require('express-session');

app.use(express.json()); // parse les requêtes au format json (accès à req.body.name....)   (sans "urlencoded" les infos d'une requête POST d'un form html ne sont pas parsées)
//app.use(express.urlencoded()); // pour parser les requêtes en strings ou arrays       (pour les forms html)

app.use(cors({
    origin:'http://localhost:1234',
    credentials: true
}));

app.use(session({
    secret:"c'estungrandgrossecret",
    name: 'sessionId',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: true,
        expires: new Date(Date.now() + 1000*60*60*24*30) // 30 days
    }
}));

app.use(router);


app.listen(port,()=>{
    console.log(`listening on host: ${host} and port: ${port}`);
})