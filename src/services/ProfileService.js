import User from '../models/user.js';

class ProfileService {
  async getInfoAuthorizedUser(userId, next) {
    if (!userId) {
      next({ errorsArray: [{ msg: '441' }], title: 'Service Error' });
      return;
    }
    const user = await User.findByPk(userId);
    const {
      id, login, firstName, lastName, email, status, ava,
    } = user;
    return {
      id, login, firstName, lastName, email, status, ava,
    };
  }

  async updateStatus(status, userId, next) {
    if (!userId) {
      next({ errorsArray: [{ msg: '441' }], title: 'Service Error' });
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
      next({ errorsArray: [{ msg: '440' }], title: 'Service Error' });
      return;
    }
    const user = await User.findByPk(userId);
    if (!user) {
      next({ errorsArray: [{ msg: '440' }], title: 'Service Error' });
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
