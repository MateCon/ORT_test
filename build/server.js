"use strict";
var express = require('express');
var app = express();
var port = 8080;
app.get('/', function (_, res) {
    res.status(200).send('hello');
});
app.listen(port, function () {
    console.log("listening on port ".concat(port));
});
