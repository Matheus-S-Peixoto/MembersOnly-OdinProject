import * as authRepository from '../repository/userRepository.js';
import { hashPassword } from './passwordService.js';

export const findUserByUsername = async (username) => {
  return await authRepository.findByUsername(username);
};

export const findUserById = async (id) => {
  return await authRepository.findById(id);
};

export const registerNewUser = async (username, password, prefname) => {
  //verify if the username already exists on the db
  const usernameInUse = await authRepository.isUsernameInUse(username);

  if (usernameInUse) {
    throw new Error('Username already in use');
  }

  //hash the password
  const hashedPassword = await hashPassword(password);

  //save the user to the db
  await authRepository.createNewUser(prefname, username, hashedPassword);
};
