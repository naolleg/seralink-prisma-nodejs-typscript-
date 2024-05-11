"use strict";
import {prisma} from "../../config/prisma";
import { Request, Response } from "express";
//import AdminSchema from './adminSchema';

const admincontroller = {
    login: (req:Request, res:Response) => {
        console.log(req.body);
    },
    register: async (req:Request, res:Response) => {
        console.log(req.body);
        //validate 
        AdminSchema.register.parse(req.body);
        //check email
        // const isEmailExist = await prisma.({
        //     where: {
        //         email: req.body.email
        //     }
        // });
        // if (isEmailExist) {
        //     return res.status(403).json({
        //         success: false,
        //         message: "email is all ready in used"
        // //     });
        // }
        // const newUser = await prisma.users;
        // const newUser = await prisma.users.create({
        //     data: {
        //         email: req.body.email,
        //         password: req.body.password,
        //         role: req.body.role,
        //         profile: {
        //             data: {
        //                 firstName: req.body.firstName,
        //                 middleName: req.body.middleName,
        //                 lastName:req.body.lastName
        //             }
        //         }
        //     }
        // });
        // const updateUser = await prisma.users.update({
        //     where: {
        //         id: 2
        //     },
        //     data: {
        //         profile: {
        //             data:{
        //                 firstName: req.body.firstName
        //             }
        //         }
        //     }
        // })
        const userSelect = await prisma.users.findFirst({
            where: {
                role: req.body.role
            },
           
        })
    }}
export default admincontroller;