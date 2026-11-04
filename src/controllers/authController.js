import { validationResult, matchedData } from 'express-validator';
import { validadeNewUser } from '../middlewares/validations.js';
import { groupValidationErrors } from '../utils/groupValidationErrors.js';
import * as authService from '../services/authService.js';

//GET REGISTER
export const getRegisterPage = (req, res) => {
  res.render('register', {
    title: 'Register',
  });
};

//GET LOGIN
export const getLoginPage = (req, res) => {
  res.render('login', {
    title: 'Login',
  });
};

//POST LOGIN
export const postLoginUser = (req, res) => {
  if (req.authError) {
    return res.status(401).render('login', {
      title: 'Login',
      formData: req.body,
      error: req.authError,
    });
  }

  res.redirect('/');
};

//POST REGISTER
export const postRegisterUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render('register', {
      title: 'Register',
      formData: req.body,
      errors: groupValidationErrors(errors),
    });
  }

  const { prefname, username, password } = matchedData(req);

  try {
    await authService.registerNewUser(username, password, prefname);
  } catch (err) {
    //should deal w this better, but i dont want to implement error treatment :)
    if (err.message === 'Username already in use') {
      return res.render('register', {
        title: 'Register',
        formData: req.body,
        errors: { username: [err.message] },
      });
    } else {
      console.error(err);
      throw new Error(err.message);
    }
  }

  res.redirect('/auth/login');
};
