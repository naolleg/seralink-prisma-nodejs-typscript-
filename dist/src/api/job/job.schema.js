"use strict";
const zod = require('zod');
const jobschema = {
    post: zod.object({
        tittle: zod.string(),
        description: zod.string(),
        category: zod.string(),
        experience: zod.string(),
    })
};
module.exports = jobschema;
