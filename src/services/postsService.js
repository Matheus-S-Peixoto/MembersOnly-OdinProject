import { updateMembershipTrue } from '../repository/userRepository.js';

export const makeUserMember = async (id) => {
  try {
    await updateMembershipTrue(id);
  } catch (error) {
    return next(error);
  }
};
