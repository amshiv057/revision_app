import mongoose, {isValidObjectId} from "mongoose"
import {Chapter} from "../models/Chapter.model.js"
import {User} from "../models/user.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"


const getAllChapter = asyncHandler(async (req, res) => {
    const { page = 1, limit = 10, query, sortBy, sortType, userId } = req.query
    //TODO: get all Chapters based on query, sort, pagination
})

const publishAChapter = asyncHandler(async (req, res) => {
    const { title, description} = req.body
    // TODO: get Chapter, upload to cloudinary, create Chapter
})

const getChapterById = asyncHandler(async (req, res) => {
    const { ChapterId } = req.params
    //TODO: get Chapter by id
})

const updateChapter = asyncHandler(async (req, res) => {
    const { ChapterId } = req.params
    //TODO: update Chapter details like title, description, thumbnail

})

const deleteChapter = asyncHandler(async (req, res) => {
    const { ChapterId } = req.params
    //TODO: delete Chapter
})

const toggleCompleteStatus = asyncHandler(async (req, res) => {
    const { ChapterId } = req.params
})

export {
   getAllChapter,
   publishAChapter,
   getChapterById,
   updateChapter,
   deleteChapter,
   toggleCompleteStatus
}
