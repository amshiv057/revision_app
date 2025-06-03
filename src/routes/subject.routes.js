import { Router } from 'express';
 
import {verifyJWT} from "../middleware/auth.middleware.js"
import { getAllSubjects, publishASubject } from '../controllers/subject.controller.js';

const router = Router();
router.use(verifyJWT);  

router.route("/publish").post(publishASubject);
router.route('/author/:authorId').get(getAllSubjects);
 

export default router