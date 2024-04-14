const env=require('dotenv');
env.config();

const JWT_SECRET = process.env.JWT_SECRET || "se";
const PORT = process.env.PORT || 8888;
const DATABASE_URL = process.env.DATABASE_URL;

module.exports={PORT,JWT_SECRET,DATABASE_URL};

