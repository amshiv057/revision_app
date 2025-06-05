import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from './app.js'
dotenv.config({ path: './.env' })
console.log("process.env.PORT>>>>>>>>",process.env.PORT);



connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log("MONGO db connection failed !!! ", err);
    })





// const app = express();
// ( async()=>{
//     try {
//          await mongoose.connect(`${process.env.MONGO_URI}/${Db_Name}`)
//          app.on(('errorr',()=>{
//             console.log("error", error);
//             throw error
//          }))

//          app.listen(`${process.env.PORT}`,()=>{
//             console.log(`Your port is currently running on this port  ${process.env.PORT}`)
//          })
//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error);
//         throw error;
//     }
// })()