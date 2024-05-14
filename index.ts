import express from "express";
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import indexroute from './src/routes/index';
import './src/config/secrete';

const app = express();
const PORT = 3000; // Reemplaza 3000 con el número de puerto que desees

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(indexroute);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});