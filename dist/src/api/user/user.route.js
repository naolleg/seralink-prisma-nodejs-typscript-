"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRouter = (0, express_1.Router)();
const user_controller_js_1 = __importDefault(require("./user.controller.js"));
const error_js_1 = __importDefault(require("../../config/error.js"));
userRouter.use('/login', (0, error_js_1.default)(user_controller_js_1.default.loginUser));
userRouter.use("/me", (0, error_js_1.default)(user_controller_js_1.default.myInfo));
exports.default = userRouter;
