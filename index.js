import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';

import DatabaseService from "./src/service/database.js";
import carRoutes from './src/route/car.js'

const app = express();

DatabaseService.initializeFireStoreInstance()


dotenv.config();
app.use(morgan('dev'));
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());


app.use('/car', carRoutes);
app.get('/health', (req, res, next) => {
    res.send('Application is up and running!!');
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Running on port: ${PORT}`))





