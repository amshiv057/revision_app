import mongoose, {isValidObjectId} from "mongoose"
import {Chapter} from "../models/chapter.models.js"
 
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asynchandler.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"


const getAllChapter = asyncHandler(async (req, res) => {
    const subjectId = req.params.subjectId
    try {
        const allChapters =await  Chapter.find({subject : subjectId})
        res.status(201).json({allChapters})
    } catch (error) {
        res.status(400).json({error : "No Chapter Found"})        
    }
})
const publishAChapter = asyncHandler(async (req, res) => {
  const { name, ranking, subject } = req.body;

  if (!name || !ranking || !subject) {
    return res.status(400).json({ error: "Name, Ranking, and Subject are required" });
  }

  try {
    const chapter = await Chapter.create({ name, ranking, subject });
    res.status(201).json({ chapter });
  } catch (error) {
    res.status(500).json({ error: error.message || "Something went wrong" });
  }
});

// const getChapterById = asyncHandler(async (req, res) => {
//     const { ChapterId } = req.params
//     //TODO: get Chapter by id
// })

// const updateChapter = asyncHandler(async (req, res) => {
//     const { ChapterId } = req.params
//     //TODO: update Chapter details like title, description, thumbnail

// })

// const deleteChapter = asyncHandler(async (req, res) => {
//     const { ChapterId } = req.params
//     //TODO: delete Chapter
// })

// const toggleCompleteStatus = asyncHandler(async (req, res) => {
//     const { ChapterId } = req.params
// })

export {
   getAllChapter,
   publishAChapter,
//    getChapterById,
//    updateChapter,
//    deleteChapter,
//    toggleCompleteStatus
}
