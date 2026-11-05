import { Router } from 'express';

import {
  getHomePage,
  getJoinClubPage,
  postJoinClubForm,
  getNewMessagePage,
  postNewMessageForm,
} from '../controllers/postsController.js';
import { validateNewMessage } from '../middlewares/validations.js';

const router = Router();

router.get('/', (req, res) => res.redirect('/posts/home'));

router.get('/home', getHomePage);

router.get('/join-club', getJoinClubPage);
router.post('/join-club', postJoinClubForm);

router.get('/new-message', getNewMessagePage);
router.post('/new-message', validateNewMessage, postNewMessageForm);

export default router;
