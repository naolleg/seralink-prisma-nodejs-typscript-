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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma_1 = require("../../config/prisma");
const user_schema_1 = __importDefault(require("./user.schema"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const secrete_1 = require("../../config/secrete");
const usersController = {
    loginUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        console.log("[[[[[[[[[[[[[[[[[[[[[[[[");
        console.log(req.body);
        user_schema_1.default.login.parse(req.body);
        console.log(req.body);
        const user = yield prisma_1.prisma.users.findFirst({
            where: { email: req.body.email },
        });
        console.log(user);
        if (!user) {
            return res.status(401).json({
                message: "Invalid username or password",
                success: false,
            });
        }
        const isMatch = bcrypt_1.default.compareSync(req.body.password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid username or password",
            });
        }
        const userProfile = yield prisma_1.prisma.profile.findFirst({
            where: { userId: user.id },
        });
        // Create token
        const payload = {
            id: user.id,
            role: user.role,
            firstName: userProfile === null || userProfile === void 0 ? void 0 : userProfile.fname,
        };
        const token = jsonwebtoken_1.default.sign(payload, secrete_1.SECRET);
        return res.status(200).json({
            token,
            message: "Login successfully",
            success: true,
        });
    }),
    myInfo: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield prisma_1.prisma.users.findFirst({
            where: { id: req.userId },
            include: {
                _count: true,
                profile: true,
            }
        });
        res.status(200).json({ success: true,
            message: "found successfully", user });
    }),
    changePassword: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        //check if user exist
        const isUser = yield prisma_1.prisma.users.findFirst({
            where: { id: req.user.id },
        });
        if (!isUser) {
            return res.status(401).json({ success: false,
                message: "user not found",
            });
        }
        //check if the old passwod is correct
        const isMatch = yield bcrypt_1.default.compareSync(req.body.oldPassword, isUser.password);
        if (!isMatch) {
            return res.status(401).json({ success: false,
                message: "password does not match",
            });
        }
        req.body.newPasswod = bcrypt_1.default.hashSync(req.body.newPasswod, 10);
        //update password
        const updatedPassword = yield prisma_1.prisma.users.update({
            where: { id: req.user.id },
            data: { password: req.body.newPasswod },
        });
        res.status(200).json({ success: true,
            message: "updated successfully", updatedPassword });
    }),
    delete: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        req.userId = +req.params.id;
        // check if user exist usind id and role
        const isUserExist = yield prisma_1.prisma.users.findFirst({
            where: {
                AND: [{ id: +req.userId }, { role: req.body.role }],
            },
        });
        if (!isUserExist) {
            return res.status(401).json({
                message: "user does not exist",
            });
        }
        //start deleting
        const isUserDeleted = yield prisma_1.prisma.users.delete({
            where: {
                id: +req.userId,
            },
        });
        res.status(200).json({
            message: "sucessfully deleted",
            sucess: true,
        });
    }),
    confirmOtp: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield prisma_1.prisma.users.findFirst({
            where: { id: +req.user.id },
            include: {
                profile: true,
            },
        });
        if (!user) {
            return res.status(401).json({ success: false,
                message: "user does not found",
            });
        }
        const { otp } = req.body;
        if (otp != user.) {
            return res.status(401).json({ success: false,
                message: "Invalid OTP"
            });
        }
        const updatedUser = yield prisma_1.prisma.user.update({
            where: {
                id: user.id,
            },
            data: {
                otp: "000000",
                otpCreatedAt: null,
                otpExpiry: null,
            },
        });
        // Create token
        const payload = {
            id: user.id,
            role: user.role,
            firstname: user.username
        };
        const token = jsonwebtoken_1.default.sign(payload, secrete_1.SECRET);
        return res.status(200).json({
            message: "Otp confirmed",
            data: updatedUser,
            token,
        });
    }),
};
exports.default = usersController;
