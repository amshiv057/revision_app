import mongoose, {isValidObjectId} from "mongoose"
import {Story} from "../models/Story.model.js"
import {User} from "../models/user.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asynchandler.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"


const getAllStory = asyncHandler(async (req, res) => {
    const { page = 1, limit = 10, query, sortBy, sortType, userId } = req.query
    //TODO: get all Story based on query, sort, pagination
})

const publishAStory = asyncHandler(async (req, res) => {
    const { title, description} = req.body
    // TODO: get Story, upload to cloudinary, create Story
})

const getStoryById = asyncHandler(async (req, res) => {
    const { StoryId } = req.params
    //TODO: get Story by id
})

const updateStory = asyncHandler(async (req, res) => {
    const { StoryId } = req.params
    //TODO: update Story details like title, description, thumbnail

})

const deleteStory = asyncHandler(async (req, res) => {
    const { StoryId } = req.params
    //TODO: delete Story
})

const togglePublishStatus = asyncHandler(async (req, res) => {
    const { StoryId } = req.params
})

export {
    getAllStory,
    publishAStory,
    getStoryById,
    updateStory,
    deleteStory,
    togglePublishStatus
}
