import { Router } from 'express';
import {verifyJWT} from "../middleware/auth.middleware.js"
import { getAllTopics, publishATopic } from '../controllers/topics.controller.js';

const router = Router();
router.use(verifyJWT); // Apply verifyJWT middleware to all routes in this file

router.route("/publish").post(publishATopic);
router.route("/:chapterId").get(getAllTopics);
// router.route("/toggle/t/:tweetId").post(toggleTweetLike);
// router.route("/videos").get(getLikedVideos);

export default router