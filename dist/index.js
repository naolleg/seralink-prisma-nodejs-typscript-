"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
require("./src/config/secrete");
const app = (0, express_1.default)();
const PORT = 3000; // Reemplaza 3000 con el número de puerto que desees
// Middleware
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// app.use(indexroute);
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
