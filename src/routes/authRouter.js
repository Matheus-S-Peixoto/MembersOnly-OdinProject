import { Router } from 'express';
import { getRegisterPage, postRegisterUser, getLoginPage } from '../controllers/authController.js';

const router = Router();

router.get('/', (req, res) => {
  res.redirect('/login');
});

router.get('/register', getRegisterPage);
router.post('/register', postRegisterUser);

router.get('/login', getLoginPage);

export default router;
