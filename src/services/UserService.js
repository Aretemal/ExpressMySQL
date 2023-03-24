import Follow from '../models/follow.js';
import User from '../models/user.js';

class UserService {
  async getOne(id) {
    if (!id) {
      throw new Error('Id не указан');
    }
    const user = await User.findByPk(id);
    return user;
  }

  async getAllUsers(id, { page, count }) {
    if (!id) {
      throw new Error('Пользователь не авторизован');
    }
    count = +count;
    page = +page;
    const beginUsers = (page - 1) * count;
    const users = await User.findAll({
      attributes: ['userId', 'firstName', 'lastName', 'login', 'email', 'status', 'ava'],
      include: {
        model: Follow,
      },
      offset: beginUsers,
      limit: count,
    });
    const countOfUsers = await User.count();
    const userAuth = users.filter((user) => user.dataValues.userId === id);
    return {
      users, countOfUsers, userAuth,
    };
  }
}
export default new UserService();
