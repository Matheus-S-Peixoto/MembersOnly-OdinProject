import { Router } from 'express';
import {
  getRegisterPage,
  postRegisterUser,
  getLoginPage,
  postLoginUser,
} from '../controllers/authController.js';
import { validadeNewUser } from '../middlewares/validations.js';
import { authenticateUser } from '../middlewares/authenticate.js';

const router = Router();

router.get('/', (req, res) => {
  res.redirect('/login');
});

router.get('/register', getRegisterPage);
router.post('/register', validadeNewUser, postRegisterUser);

router.get('/login', getLoginPage);
router.post('/login', authenticateUser, postLoginUser);

export default router;
