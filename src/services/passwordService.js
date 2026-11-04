import bcrypt from 'bcryptjs';

const SALT = 10;

export const hashPassword = (password) => {
  return bcrypt.hash(password, SALT);
};

export const verifyPassword = (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};
