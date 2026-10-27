import { Router } from 'express';
import postsRouter from './postsRouter.js';
import authRouter from './authRouter.js';

const indexRouter = Router();

indexRouter.get('/', (req, res) => res.redirect('/posts/home'));

indexRouter.use('/posts', postsRouter);
indexRouter.use('/auth', authRouter);

export default indexRouter;
