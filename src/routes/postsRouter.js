import { Router } from 'express';
import { getHomePage, getJoinClubPage, postJoinClubForm } from '../controllers/postsController.js';

const router = Router();

router.get('/', (req, res) => res.redirect('/posts/home'));

router.get('/home', getHomePage);

router.get('/join-club', getJoinClubPage);
router.post('/join-club', postJoinClubForm);

export default router;
