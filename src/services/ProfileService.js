import User from '../models/user.js';

class ProfileService {
  async getInfoAuthorizedUser(userId) {
    if (!userId) {
      throw new Error('Id не указан');
    }
    const user = await User.findByPk(userId);
    const {
      id, login, firstName, lastName, email, status, ava,
    } = user;
    return {
      id, login, firstName, lastName, email, status, ava,
    };
  }

  async updateStatus(status, userId) {
    if (!userId) {
      throw new Error('Id не указан');
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
      throw new Error('Id не указан');
    }
    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error('Пользователь не найден');
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
