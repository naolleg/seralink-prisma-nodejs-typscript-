"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const indexroute = require('./src/routes/index');
require('./src/config/secrete');
const app = express();
//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(indexroute);
app.listen(PORT, function () {
    console.log(`Server listening on port ${PORT}`);
});
