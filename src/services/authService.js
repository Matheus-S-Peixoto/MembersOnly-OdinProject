import * as userRepository from '../repository/userRepository.js';
import { hashPassword } from './passwordService.js';

export const findUserByUsername = async (username) => {
  return await userRepository.findByUsername(username);
};

export const findUserById = async (id) => {
  return await userRepository.findById(id);
};

export const registerNewUser = async (username, password, prefname) => {
  //verify if the username already exists on the db
  const usernameInUse = await userRepository.isUsernameInUse(username);

  if (usernameInUse) {
    throw new Error('Username already in use');
  }

  //hash the password
  const hashedPassword = await hashPassword(password);

  //save the user to the db
  await userRepository.createNewUser(prefname, username, hashedPassword);
};
