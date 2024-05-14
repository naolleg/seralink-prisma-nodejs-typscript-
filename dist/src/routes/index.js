"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = __importDefault(require("../api/user/user.route"));
const admin_route_1 = __importDefault(require("../api/admin/admin.route"));
const approute = express_1.default.Router();
approute.use(user_route_1.default);
approute.use(admin_route_1.default);
exports.default = approute;
