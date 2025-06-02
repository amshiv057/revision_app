import mongoose from "mongoose";
 
const topicSchema = new mongoose.Schema({
     name:{
            type:String,
            required: true
        },
        ranking:{
            type: Number,
            required:true
        },
        subject:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'Subject'
        }
},{timestamps:true});

 

export const Topic = mongoose.model("Topic",topicSchema)