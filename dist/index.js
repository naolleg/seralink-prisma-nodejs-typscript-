"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
dotenv.config();
console.log();
const app = express();
//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT =  8888;

app.listen(PORT, function () {
    console.log(`Server listening on port ${PORT}`);
});