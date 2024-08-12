
/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ    */
/*  إِ*/
/*اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ، وَعَلَى آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ  */
/* I believe in Allah and he is enough for me */






import { createRequire } from "module";
let require = createRequire(import.meta.url);
require("dotenv").config() 
import fs from "fs";
import path from "path";
import {  fileURLToPath } from "url";
import {  Router} from "express";
import User from "../models/User.js";
import  cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import sign_up_middleWare from "../controllars/midlewares/sign_up_midleware.js";
 import express from "express";
import { error, log } from "console";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import { checkEachData, Logger } from "../controllars/checkEachData.js";
import { generatePin } from "../controllars/generatePin.js";

// Variables
const AuthRouter = Router();
 let Secret = process.env.Secret
 let __filename= fileURLToPath(import.meta.url) ;
 let __dirname = path.dirname(__filename) ;
 
 


AuthRouter.post('/register' ,async (req , res) => {
    let {email , name , phone ,password } = req.body;
    if ( !checkEachData(email,25,7) || !checkEachData(name,20,5) || !checkEachData(password,20,6) || typeof phone !== "number" ) {
        return res.status(400).json({error : 'please send correct data'})
    }
    let pin = generatePin(0,999999,99999) ;
    let varified = false
    let checkUser = await User.findOne({email});
    if (checkUser !== null) return res.status(200).json({error :'you already have an acount ,please login'})
    User.create({name, email,phone,password,pin ,varified}).then(async user => {
        let token =jwt.sign({email},Secret,{})
        res.cookie('varification_token',token, {expires:new Date(Date.now()+ 65000), sameSite:false, httpOnly:true}).status(201).json({success : true ,token})
        setTimeout(async ()=> {
            let usercheck = await User.findOne({email});
            if (usercheck === null) return
            if (usercheck.varified === true) return
            User.findByIdAndDelete({email})
        },60000)
    }).catch(e => {
        Logger(e);
        res.json({error :'sorry failed to create acount ,try again'})
    })
    
}) 



AuthRouter.post('/varify',(req,res) =>{
    let {token,pin} = req.body;
    if (pin === undefined  ) return res.json({error : 'please provide the correct pin'})
    if ( token !== undefined  )  {
        jwt.verify(token,Secret,async (err,data)=> {
            if (typeof data !== "object") return res.json({error : 'please try to register after 1 minutes'})
            let {email} = data
            if (email === undefined) return res.json({error : 'sorry for timed out'})
            try {
                let user = await User.findOne({email});
                if (user === null ) return res.json({error : 'after 60 seconds varification is not possible ,plaese signup again'})
                if (user.pin !== pin )  return res.json({error : 'wrong pin ,give the correct pin'})
                if (user.varified === true) return res.json({error : 'please login'})
                user.valified = true;
                user.save().then(async (e) => {
                    let {email ,name , phone } = e ;
                   let refresh_token= await jwt.sign({email},Secret,{})
                  return  res.cookie('refresh_token',refresh_token, {expires:new Date(Date.now()+ 65000), sameSite:false, httpOnly:true}).status(200).json({success : true,email ,name , phone })
                }).catch(e => {
                    return res.json({error : 'please try to register after 1 minutes'})
                })
            } catch (error) {
                Logger(Error)
            }
        })
    }
    if (token === undefined && req.cookies.varification_token !== undefined ) {
        token =req.cookies.varification_token
        jwt.verify(token,Secret,async (err,data)=> {
            if (typeof data !== "object") return res.json({error : 'please try to register after 1 minutes'})
            let {email} = data
            if (email === undefined) return res.json({error : 'sorry for timed out'})
            try {
                let user = await User.findOne({email});
                if (user === null ) return res.json({error : 'after 60 seconds varification is not possible ,plaese signup again'})
                if (user.pin !== pin )  return res.json({error : 'wrong pin ,give the correct pin'})
                if (user.varified === true) return res.json({error : 'please login'})
                user.valified = true;
                user.save().then(async e => {
                    return res.json({success : true})
                }).catch(e => {
                    return res.json({error : 'please try to register after 1 minutes'})
                })
            } catch (error) {
                Logger(Error)
            }
        })
    }
    if (token === undefined && req.cookies.varification_token === undefined ) return res.json({error : 'please register afer few minutes'})
} )
    


AuthRouter.post('/login',async (req,res) => {
    let {email,password} = req.body;
    if (!checkEachData(email) || !checkEachData(password)) return res.json({error :'Give the correct email and password'})
    let user = await User.findOne({email})
    if (user === null) return res.json({error :'Give the correct email and password'})
    if (user.password !== password ) return res.json({error :'Give the correct email and password'})
    let token =jwt.sign({email},Secret,{})
    return res.cookie('refresh_token',token, {expires:new Date(Date.now()+ 65000), sameSite:false, httpOnly:true}).status(200).json({success : true,email ,name , phone })

})

export default AuthRouter;





































