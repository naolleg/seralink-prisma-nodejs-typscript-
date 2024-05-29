"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const job_controller_1 = __importDefault(require("./job.controller"));
const jobRoute = (0, express_1.Router)();
jobRoute.get('/', (req, res) => {
    res.send('Hello, World!');
});
// jobRoute.get('/seeker', jobcontroller.getallposts);
//jobRoute.get('/posts', jobcontroller.getallposts);
// jobRoute.get('/providers/posts', jobcontroller.getposts);
// jobRoute.get('/posts/:id', jobController.getsinglepost);
jobRoute.post('/posts', job_controller_1.default.createPost);
// jobRoute.delete('/provider/posts/:id', jobcontroller.deletepost);
// jobRoute.put('/api/posts/:id', jobController.updatepost);
exports.default = jobRoute;
