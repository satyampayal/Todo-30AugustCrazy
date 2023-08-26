import express from 'express'
import router from './Routes/Routes.js';
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();
const app=express();
app.use(cors({
    methods:['GET','POST'],
    Credential:true,

}));
app.use(express.json())
app.use(router)
//app.use('/todo',router);

export default app;