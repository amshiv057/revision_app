import {asyncHandler} from "../utils/asynchandler.js"
import { Question } from "../models/questions.model.js";

// GET /questions — list with pagination, filter, sort
const getAllQuestions = asyncHandler(async (req, res) => {
  const {
    page = 1,
    limit = 10,
    query = '',
    sortBy = 'ranking',
    sortType = 'asc',
    userId // optional filtering
  } = req.query;

  const skip = (page - 1) * limit;
  const sortOption = { [sortBy]: sortType === 'desc' ? -1 : 1 };

  const filter = {
    question: { $regex: query, $options: 'i' },
    ...(userId && { author: userId }) // if filtering by user
  };

  const total = await Question.countDocuments(filter);
  const questions = await Question.find(filter)
    .sort(sortOption)
    .skip(skip)
    .limit(Number(limit));

  res.status(200).json({
    total,
    page: Number(page),
    limit: Number(limit),
    questions
  });
});

// POST /questions — create new question
const publishAQuestion = asyncHandler(async (req, res) => {
  const { ranking, topicId, question, correctOption, answer, statements, options, type } = req.body;

  if (!ranking || !topicId || !question || !correctOption || !answer || !type) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const newQuestion = await Question.create({
    ranking,
    topicId,
    question,
    correctOption,
    answer,
    statements,
    options,
    type
  });

  res.status(201).json(newQuestion);
});

// GET /questions/:questionId — get question by ID
const getQuestionById = asyncHandler(async (req, res) => {
  const { questionId } = req.params;

  const question = await Question.findById(questionId);
  if (!question) {
    return res.status(404).json({ message: 'Question not found' });
  }

  res.status(200).json(question);
});

// PUT /questions/:questionId — update question
const updateQuestion = asyncHandler(async (req, res) => {
  const { questionId } = req.params;

  const updated = await Question.findByIdAndUpdate(questionId, req.body, {
    new: true,
    runValidators: true
  });

  if (!updated) {
    return res.status(404).json({ message: 'Question not found or update failed' });
  }

  res.status(200).json(updated);
});

// DELETE /questions/:questionId — delete question
const deleteQuestion = asyncHandler(async (req, res) => {
  const { questionId } = req.params;

  const deleted = await Question.findByIdAndDelete(questionId);
  if (!deleted) {
    return res.status(404).json({ message: 'Question not found or delete failed' });
  }

  res.status(200).json({ message: 'Question deleted successfully' });
});

export {
  getAllQuestions,
  publishAQuestion,
  getQuestionById,
  updateQuestion,
  deleteQuestion
};
