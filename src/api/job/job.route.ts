import express from 'express';
import { Router } from 'express';
import jobcontroller from './job.controller';

const jobRoute = Router();

jobRoute.get('/', (req, res) => {
  res.send('Hello, World!');
});

//jobRoute.get('/seeker', jobcontroller.getallposts);
//jobRoute.get('/posts', jobcontroller.getallposts);
// jobRoute.get('/providers/posts', jobcontroller.getposts);
// jobRoute.get('/posts/:id', jobController.getsinglepost);
jobRoute.post('/posts', jobcontroller.createPost);
// jobRoute.delete('/provider/posts/:id', jobcontroller.deletepost);
// jobRoute.put('/api/posts/:id', jobController.updatepost);

export default jobRoute;