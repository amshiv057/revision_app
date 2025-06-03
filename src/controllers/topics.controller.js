import mongoose, {isValidObjectId} from "mongoose"
import {Topic} from "../models/Topic.model.js"
import {User} from "../models/user.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"


const getAllTopics = asyncHandler(async (req, res) => {
    const { page = 1, limit = 10, query, sortBy, sortType, userId } = req.query
    //TODO: get all Topics based on query, sort, pagination
})

const publishATopic = asyncHandler(async (req, res) => {
    const { title, description} = req.body
    // TODO: get Topic, upload to cloudinary, create Topic
})

const getTopicById = asyncHandler(async (req, res) => {
    const { TopicId } = req.params
    //TODO: get Topic by id
})

const updateTopic = asyncHandler(async (req, res) => {
    const { TopicId } = req.params
    //TODO: update Topic details like title, description, thumbnail

})

const deleteTopic = asyncHandler(async (req, res) => {
    const { TopicId } = req.params
    //TODO: delete Topic
})

const togglePublishStatus = asyncHandler(async (req, res) => {
    const { TopicId } = req.params
})

export {
    getAllTopics,
    publishATopic,
    getTopicById,
    updateTopic,
    deleteTopic,
    togglePublishStatus
}
