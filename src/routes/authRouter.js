import { Router } from 'express';
import { getRegisterPage, postRegisterUser } from '../controllers/authController.js';

const router = Router();

router.get('/', (req, res) => {
  res.redirect('/login');
});

router.get('/register', getRegisterPage);
router.post('/register', postRegisterUser);

export default router;
