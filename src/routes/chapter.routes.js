import { Router } from 'express';
 
import {verifyJWT} from "../middleware/auth.middleware.js"
import { getAllChapter, publishAChapter } from '../controllers/chapter.controller.js';

const router = Router();
router.use(verifyJWT); // Apply verifyJWT middleware to all routes in this file

router.route("/publish").post(publishAChapter);
router.route("/:subjectId").get(getAllChapter);
// router.route("/toggle/t/:tweetId").post(toggleTweetLike);
// router.route("/videos").get(getLikedVideos);

export default router