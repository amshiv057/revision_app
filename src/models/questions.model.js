import mongoose from "mongoose";
 import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const questionSchema = new mongoose.Schema({
     ranking:{
        type:Number,
        required
     },
     
},{timestamps:true});

questionSchema.plugin(mongooseAggregatePaginate)

export const Question = mongoose.model("Question",chapterSchema)                      