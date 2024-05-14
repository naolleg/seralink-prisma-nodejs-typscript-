"use strict";
import express from 'express';
import { Router } from 'express';
import upload from '../config/multer';
import UserController from '../controllers/user.controller';

const userRoute = Router();

// Rutas
userRoute.get('/admin/users', UserController.getUsers);
userRoute.get('/admin/users/:id', UserController.getsingleUsers);
userRoute.post('/signup', upload.single('image'), UserController.createUser);
// userRoute.post('/admin/addprovider',UserController.createprovider)
// userRoute.delete('/admin/users/:id',UserController.deleteUser)
// userRoute.put('/api/user/:id',UserController.updateUser)

export default userRoute;