import mongoose, {isValidObjectId} from "mongoose"
import {Question} from "../models/Question.model.js"
import {User} from "../models/user.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"


const getAllQuestions = asyncHandler(async (req, res) => {
    const { page = 1, limit = 10, query, sortBy, sortType, userId } = req.query
    //TODO: get all Questions based on query, sort, pagination
})

const publishAQuestion = asyncHandler(async (req, res) => {
    const { title, description} = req.body
    // TODO: get Question, upload to cloudinary, create Question
})

const getQuestionById = asyncHandler(async (req, res) => {
    const { QuestionId } = req.params
    //TODO: get Question by id
})

const updateQuestion = asyncHandler(async (req, res) => {
    const { QuestionId } = req.params
    //TODO: update Question details like title, description, thumbnail

})

const deleteQuestion = asyncHandler(async (req, res) => {
    const { QuestionId } = req.params
    //TODO: delete Question
})

 
export {
    getAllQuestions,
    deleteQuestion,
    updateQuestion,
    getQuestionById,
    publishAQuestion
}
