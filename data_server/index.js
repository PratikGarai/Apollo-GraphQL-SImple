const express = require('express');
const http = require('http');
const bodyparser = require("body-parser");
const routes = require('./routes');

const app = express();
app.use(bodyparser.json());
app.use(routes);

const server = http.createServer(app);
server.listen(5000, ()=> {
    console.log("Server running!");
})