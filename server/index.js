 /* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */

//imports
import express from "express";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
require('dotenv').config()
import connectDb from './controllars/connectDb.js' ;


//varible
let mongooseKey = process.env.MONGO ;
const app = express() ;



//environment 

//connectDb(mongooseKey)




app.use('/api/user' , () => {

}) ;



app.listen(4000 ,() =>  console.log('InshaAllah'))
