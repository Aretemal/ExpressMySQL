import User from '../models/user.js';
import ServiceError from '../utils/errors/ServiceError.js';

class ProfileService {
  async getInfoAuthorizedUser(userId) {
    if (!userId) {
      throw new ServiceError('441');
    }
    const user = await User.findByPk(userId);
    const {
      id, login, firstName, lastName, email, status, ava, lang,
    } = user;
    return {
      id, login, firstName, lastName, email, status, ava, lang,
    };
  }

  async updateStatus(status, userId) {
    if (!userId) {
      throw new ServiceError('441');
    }
    const oldUser = await User.findByPk(userId);
    await oldUser.update({ status });
    const {
      id, login, firstName, lastName, email, ava,
    } = oldUser;
    return {
      id, login, firstName, lastName, email, status, ava,
    };
  }

  async getStatus(userId) {
    if (!userId) {
      throw new ServiceError('id not specified', 400);
    }
    const user = await User.findByPk(userId);
    if (!user) {
      throw new ServiceError('User is not found', 400);
    }
    const {
      id, login, firstName, lastName, email, ava, status,
    } = user;
    return {
      id, login, firstName, lastName, email, ava, status,
    };
  }
}
export default new ProfileService();
