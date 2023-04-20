import User from '../models/user.js';

class ProfileService {
  async getInfoAuthorizedUser(userId, next) {
    if (!userId) {
      next({ errorsArray: [{ msg: 'Id not specified' }] });
      return;
    }
    const user = await User.findByPk(userId);
    const {
      id, login, firstName, lastName, email, status, ava, lang,
    } = user;
    return {
      id, login, firstName, lastName, email, status, ava, lang,
    };
  }

  async updateStatus(status, userId, next) {
    if (!userId) {
      next({ errorsArray: [{ msg: 'Id not specified' }] });
      return;
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

  async getStatus(userId, next) {
    if (!userId) {
      next({ errorsArray: [{ msg: 'No such connection exists' }] });
      return;
    }
    const user = await User.findByPk(userId);
    if (!user) {
      next({ errorsArray: [{ msg: 'No such connection exists' }] });
      return;
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
