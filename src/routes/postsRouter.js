import { Router } from 'express';
import { getHomePage } from '../controllers/postsController.js';

const router = Router();

router.get('/', (req, res) => res.redirect('/posts/home'));

router.get('/home', getHomePage);

export default router;
