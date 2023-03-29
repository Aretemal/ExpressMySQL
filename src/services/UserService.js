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
    const data = await User.findAll({
      attributes: ['userId', 'firstName', 'lastName', 'login', 'email', 'status', 'ava'],
      include: [{
        model: Follow,
        association: 'following',
      }, {
        model: Follow,
        association: 'follower',
      }],
      offset: beginUsers,
      limit: count,
    });
    const users = data.map((user) => {
      if (user.dataValues.follower.some((follow) => follow.followingId === id
        && follow.approvedAt.getFullYear() !== 1970)) {
        user.dataValues.followed = true;
        delete user.dataValues.follower;
        delete user.dataValues.following;
      } else if (user.dataValues.following
        .some((follow) => follow.followerId === id)) {
        user.dataValues.followed = true;
        delete user.dataValues.follower;
        delete user.dataValues.following;
      } else {
        user.dataValues.followed = false;
        delete user.dataValues.follower;
        delete user.dataValues.following;
      }
      return user.dataValues;
    });
    const countOfUsers = await User.count();
    return {
      users, countOfUsers,
    };
  }
}
export default new UserService();
