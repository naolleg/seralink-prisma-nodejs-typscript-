"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const userschema = {
    login: (0, zod_1.object)({
        password: (0, zod_1.string)().min(6),
        email: (0, zod_1.string)(),
    }),
    post: (0, zod_1.object)({
        firstname: (0, zod_1.string)(),
        lastname: (0, zod_1.string)(),
        password: (0, zod_1.string)().min(6),
        email: (0, zod_1.string)(),
        role: (0, zod_1.string)(),
        Image: (0, zod_1.string)()
    })
};
exports.default = userschema;
