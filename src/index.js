import mongoose from "mongoose";                                    
import dotenv from 'dotenv'
import express from 'express';
import connect_Db from "./db/index.js";

 dotenv.config({
    path:'src/index.js'
 })


connect_Db();






/*
const app = express();
( async()=>{
    try {
         await mongoose.connect(`${process.env.MONGO_URI}/${Db_Name}`)
         app.on(('errorr',()=>{
            console.log("error", error);
            throw error
         }))

         app.listen(`${process.env.PORT}`,()=>{
            console.log(`Your port is currently running on this port  ${process.env.PORT}`)
         })
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
})()*/