 /* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */

//imports
import express from "express";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
require('dotenv').config()
import connectDb from './controllars/connectDb.js' ;
import cors from "cors";
import AuthRouter from "./routes/authRouter.js";
import cookieParser from "cookie-parser";
import User from "./models/User.js";



//varible
let mongooseKey = process.env.MONGO ;
const app = express() ;



 
//environment


app.use((req,res,next) => {


    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
    res.setHeader("Access-Control-Allow-Headers", 'content-type','Accept','Origin' );
    res.setHeader("Access-Control-Allow-Methods",'POST','GET') 
    res.setHeader('Access-Control-Allow-Methods' , 'true');
    if (req.method === 'OPTIONS') {
       return res.sendStatus(204)
    }
    next()
}) ;


app.use(express.json())
app.use(cookieParser())

 connectDb(mongooseKey) 



app.use('/auth' , AuthRouter );

 



app.listen(8000, () => {
    console.log('success');
}) ;


