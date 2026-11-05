import { updateMembershipTrue } from '../repository/userRepository.js';
import { insertNewMessage } from '../repository/msgRepository.js';

export const makeUserMember = async (userId) => {
  await updateMembershipTrue(userId);
};

export const sendNewMessage = async (userId, content) => {
  await insertNewMessage(userId, content);
};
