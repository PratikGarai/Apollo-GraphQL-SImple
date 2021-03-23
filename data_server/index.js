const express = require('express');
const http = require('http');
const routes = require('./routes');

const app = express();
app.use(routes);

const server = http.createServer(app);
server.listen(5000, ()=> {
    console.log("Server running!");
})