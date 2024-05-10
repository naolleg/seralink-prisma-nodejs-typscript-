"use strict";
const z = require("zod");
const AdminSchema = {
    register: z.object({
        email: z.string().email(),
        password: z.string().min(6),
        role: z.enum(['ADMIN', 'SEEKER', 'PROVIDER']),
        firstName: z.string(),
        middleName: z.string(),
        lastName: z.string(),
        gender: z.enum(['MALE', 'FEMALE']),
        imageUrl: z.string()
    }),
};
module.exports = AdminSchema;
