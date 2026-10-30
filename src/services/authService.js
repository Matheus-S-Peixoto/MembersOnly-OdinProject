import * as authRepository from '../repository/userRepository.js';
import bcrypt from 'bcryptjs';

export const registerNewUser = async (username, password, prefname) => {
  //verify if the username already exists on the db
  const usernameExists = await authRepository.findByUsername(username);

  if (usernameExists) {
    throw new Error('Username already in use');
  }

  //hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  //save the user to the db
  await authRepository.createNewUser(prefname, username, hashedPassword);
};
