"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jobRoute = (0, express_1.Router)();
jobRoute.get('/', (req, res) => {
    res.send('Hello, World!');
});
// jobRoute.get('/seeker', jobcontroller.getallposts);
//jobRoute.get('/posts', jobcontroller.getallposts);
// jobRoute.get('/providers/posts', jobcontroller.getposts);
// jobRoute.get('/posts/:id', jobController.getsinglepost);
//jobRoute.post('/posts', jobcontroller.createpost);
// jobRoute.delete('/provider/posts/:id', jobcontroller.deletepost);
// jobRoute.put('/api/posts/:id', jobController.updatepost);
exports.default = jobRoute;
