"use strict";
import admincontroller from "./admin.controller";
import express from "express";

const adminrouter = express.Router();

adminrouter.post("/login", admincontroller.login);
adminrouter.post("/register", admincontroller.register);

export default adminrouter;