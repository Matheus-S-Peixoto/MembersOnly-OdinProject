import { updateMembershipTrue } from '../repository/userRepository.js';
import { insertNewMessage, selectAllMessages, deleteMessage } from '../repository/msgRepository.js';

export const makeUserMember = async (userId) => {
  await updateMembershipTrue(userId);
};

export const sendNewMessage = async (userId, content) => {
  await insertNewMessage(userId, content);
};

export const getAllMessages = async () => {
  return await selectAllMessages();
};

export const deleteMessageById = async (msgId) => {
  await deleteMessage(msgId);
};
