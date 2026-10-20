import { Router } from 'express';
import postsRouter from './posts.js';

const indexRouter = Router();

indexRouter.get('/', (req, res) => res.redirect('/posts/home'));

indexRouter.use('/posts', postsRouter);

export default indexRouter;
