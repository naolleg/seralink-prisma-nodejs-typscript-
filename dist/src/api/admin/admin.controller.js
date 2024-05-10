"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../config/prisma");
//import AdminSchema from './adminSchema';
const admincontroller = {
    login: (req, res) => {
        console.log(req.body);
    },
    register: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const userSelect = yield prisma_1.prisma.users.findMa({
            where: {
                role: req.body.role
            },
            include: {
                profile: {
                    firstName: true
                }
            }
        });
    })
};
exports.default = admincontroller;
