import express from "express";
import userroute from "../api/user/user.route";
import adminroute from "../api/admin/admin.route";
import jobRoute from "../api/job/job.route";
const approute = express.Router();

approute.use(userroute);
approute.use(adminroute);

export default approute;

