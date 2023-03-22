import { Op } from 'sequelize';
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
      include: Follow,
      offset: beginUsers,
      limit: count,
    });
    const countOfUsers = users.length;
    const userAuth = users.filter((user) => user.dataValues.userId === id);
    return {
      users, countOfUsers, userAuth,
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
    const { status } = user;
    return status;
  }
}
export default new UserService();
