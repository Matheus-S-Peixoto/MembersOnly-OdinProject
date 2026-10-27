import { Router } from 'express';
import { getRegisterPage } from '../controllers/authController.js';

const router = Router();

router.get('/', (req, res) => {
  res.redirect('/login');
});

router.get('/register', getRegisterPage);

export default router;
