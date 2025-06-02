import mongoose from "mongoose";
 import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const storySchema = new mongoose.Schema({
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

 

export const Story = mongoose.model("Story",storySchema)