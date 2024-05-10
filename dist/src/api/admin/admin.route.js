"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const admin_controller_1 = __importDefault(require("./admin.controller"));
const express_1 = __importDefault(require("express"));
const adminrouter = express_1.default.Router();
adminrouter.post("/login", admin_controller_1.default.login);
adminrouter.post("/register", admin_controller_1.default.register);
exports.default = adminrouter;
