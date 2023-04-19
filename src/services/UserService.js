import Follow from '../models/follow.js';
import User from '../models/user.js';
import AppError from '../utils/AppError.js';

class UserService {
  async getOne(userId) {
    if (!userId) {
      throw new AppError('id not specified', 400);
    }
    const user = await User.findByPk(userId);
    return user;
  }

  async getAllUsers(userId, { page, count }) {
    if (!userId) {
      throw new AppError('User is not found', 400);
    }
    count = +count;
    page = +page;
    const beginUsers = (page - 1) * count;
    const data = await User.findAll({
      attributes: ['id', 'firstName', 'lastName', 'login', 'email', 'status', 'ava'],
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
      if (user.dataValues.follower.some((follow) => follow.followingId === userId
        && follow.approvedAt !== null)) {
        user.dataValues.followed = 'unfollow';
      } else if (user.dataValues.following
        .some((follow) => follow.followerId === userId)) {
        user.dataValues.followed = 'unfollow';
      } else if (user.dataValues.follower.some((follow) => follow.followingId === userId
        && follow.approvedAt === null)) {
        user.dataValues.followed = 'approve';
      } else {
        user.dataValues.followed = 'follow';
      }
      delete user.dataValues.follower;
      delete user.dataValues.following;
      return user.dataValues;
    });
    const countOfUsers = await User.count();
    return {
      users, countOfUsers,
    };
  }
}
export default new UserService();
