import User from '../models/user.js';

class ProfileService {
  async getInfoAuthorizedUser(id) {
    if (!id) {
      throw new Error('Id не указан');
    }
    const user = await User.findByPk(id);
    const {
      userId, login, firstName, lastName, email, status, ava,
    } = user;
    return {
      userId, login, firstName, lastName, email, status, ava,
    };
  }

  async updateStatus(status, id) {
    if (!id) {
      throw new Error('Id не указан');
    }
    const oldUser = await User.findByPk(id);
    await oldUser.update({ status });
    const {
      userId, login, firstName, lastName, email, ava,
    } = oldUser;
    return {
      userId, login, firstName, lastName, email, status, ava,
    };
  }

  async getStatus(id) {
    if (!id) {
      throw new Error('Id не указан');
    }
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error('Пользователь не найден');
    }
    const {
      userId, login, firstName, lastName, email, ava, status,
    } = user;
    return {
      userId, login, firstName, lastName, email, ava, status,
    };
  }
}
export default new ProfileService();
