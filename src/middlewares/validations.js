import { body } from 'express-validator';

export const validadeNewUser = [
  body('prefname')
    .trim()
    .notEmpty()
    .withMessage('this field is not optional')
    .bail()
    .isAlpha('pt-BR', { ignore: ' ' })
    .withMessage('Name must have only letters'),
  body('username')
    .trim()
    .notEmpty()
    .withMessage('this field is not optional')
    .bail()
    .isLength({ min: 5, max: 40 })
    .withMessage('Username = >=5 & <= 40')
    .bail()
    .isAlphanumeric('pt-BR', { ignore: /[-_.]/ })
    .withMessage("Username only accepts alphanumerics and '-' '_' '.'"),
  body('password')
    .trim()
    .notEmpty()
    .withMessage('this field is not optional')
    .bail()
    .isLength({ min: 8 })
    .withMessage('Password must have at least 8 characters'),
];
