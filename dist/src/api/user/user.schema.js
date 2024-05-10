"use strict";
const userschema = {
    post: zod.object({
        firstname: zod.string(),
        lastname: zod.string(),
        password: zod.string.min(6),
        email: zod.string(),
        role: zod.string(),
        Image: zod.string()
    })
};
module.exports = userschema;
