"use strict";
const env = require('dotenv');
env.config();
;
const PORT = process.env.PORT || 8888;
const DATABASE_URL = process.env.DATABASE_URL;
module.exports = { PORT, DATABASE_URL };
