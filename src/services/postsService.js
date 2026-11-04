import { updateSetAdminTrue } from '../repository/userRepository.js';

export const makeUserAdmin = async (id) => {
  try {
    await updateSetAdminTrue(id);
  } catch (error) {
    return next(error);
  }
};
