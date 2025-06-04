import { Router } from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import {
  deleteQuestion,
  getAllQuestions,
  getQuestionById,
  publishAQuestion,
  updateQuestion,
} from "../controllers/questions.controller.js";

const router = Router();
router.use(verifyJWT);

router.route("/publish").post(publishAQuestion);
router.route("/:topicId").get(getAllQuestions);
router.route("/question/:questionId").get(getQuestionById);
router.route("/question/:questionId").patch(updateQuestion);
router.route("/question/:questionId").delete(deleteQuestion);

export default router;
