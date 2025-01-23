import {Router} from 'express';
import controller from '../controllers/posts';
const router = Router();

router.get('/posts',  controller.all);
router.get('/posts/:id', controller.find);
router.post('/posts/new', controller.insert)

export default router;