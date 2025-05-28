import mongoose from 'mongoose'
import { Db_Name } from '../constants.js'

const connect_Db = async ()=>{
    try {
           const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${Db_Name}`);
           console.log(`\n MongoDb connected  !! and the host is ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("Error while connecting with db", error);
        process.exit(1)
    }
}

export default connect_Db