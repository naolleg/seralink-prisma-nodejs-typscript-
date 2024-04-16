"use strict";
const admincontroller = require("./admin.controller");
const express = require("express");
const adminrouter = express.Router();
// adminrouter.get("/dashboard",admincontroller.login);
adminrouter.post("/login", admincontroller.login);
adminrouter.post("/register", admincontroller.register);
module.exports = adminrouter;
