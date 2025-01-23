import { Router } from 'express';
import posts from './endpoints/posts';

const router = Router();

router.use(posts);

export default router;