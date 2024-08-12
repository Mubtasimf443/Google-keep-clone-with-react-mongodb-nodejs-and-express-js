/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ Allah is enough to help me , InshaAllah */


import mongoose from "mongoose";
import { createRequire } from "module";
import { Logger } from "./checkEachData.js";
const require = createRequire(import.meta.url);
require('dotenv').config() ;



let connectDb = async () => {
    try {
     let a =  await mongoose.connect(process.env.MONGO) ;  
    Logger('db connected')
    } catch (error) {
        console.log(error);
    }
}


export default connectDb ;













