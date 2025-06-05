import mongoose, {isValidObjectId} from "mongoose"
import {Subject} from "../models/Subject.model.js"
 
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asynchandler.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"


const getAllSubjects = asyncHandler(async (req, res) => {
  const authorId = req.params.authorId;

  try {
    const subjects = await Subject.find({ author: authorId });
    
    if (!subjects || subjects.length === 0) {
      return res.status(404).json({ message: 'No subjects found for this author' });
    }

    res.status(200).json(subjects);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});


const publishASubject = asyncHandler(async (req, res) => {
  const { name, rank, author } = req.body;

  if (!name || !rank || !author) {
    return res.status(400).json({ message: 'Please provide name, rank, and author' });
  }

  try {
    const newSubject = await Subject.create({ name, rank, author });
    res.status(201).json(newSubject);
  } catch (error) {
    res.status(500).json({ message: 'Failed to publish subject', error: error.message });
  }
});

// const getSubjectById = asyncHandler(async (req, res) => {
//     const { SubjectId } = req.params
//     //TODO: get Subject by id
// })

// const updateSubject = asyncHandler(async (req, res) => {
//     const { SubjectId } = req.params
//     //TODO: update Subject details like title, description, thumbnail

// })

// const deleteSubject = asyncHandler(async (req, res) => {
//     const { SubjectId } = req.params
//     //TODO: delete Subject
// })

// const togglePublishStatus = asyncHandler(async (req, res) => {
//     const { SubjectId } = req.params
// })

export {
    getAllSubjects,
    publishASubject,
    // getSubjectById,
    // updateSubject,
    // deleteSubject,
    // togglePublishStatus
}
