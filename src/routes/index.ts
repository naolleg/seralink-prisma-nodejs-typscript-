const userroute = require("../api/user/user.route");
const adminroute = require("../api/admin/admin.route");
const approute=express.Router();

approute.use(userroute);
approute.use(adminroute);

module.exports=approute;


