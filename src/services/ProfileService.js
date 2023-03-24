import User from '../models/user.js';

class ProfileService {
  async getInfoAuthorizedUser(id) {
    if (!id) {
      throw new Error('Id не указан');
    }
    const user = await User.findByPk(id);
    const {
      userId, login, firstName, lastName, email, status,
    } = user;
    return {
      userId, login, firstName, lastName, email, status,
    };
  }

  async updateStatus(status, id) {
    if (!id) {
      throw new Error('Id не указан');
    }
    const oldUser = await User.findByPk(id);
    const {
      login, firstName, lastName, email,
    } = oldUser;
    await oldUser.update({
      login, firstName, lastName, email, status,
    });
    return { status };
  }

  async getStatus(id) {
    if (!id) {
      throw new Error('Id не указан');
    }
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error('Пользователь не найден');
    }
    const { status } = user;
    return { status, id };
  }
}
export default new ProfileService();
