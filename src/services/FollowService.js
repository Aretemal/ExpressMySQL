import { Op } from 'sequelize';
import Follow from '../models/follow.js';
import User from '../models/user.js';

class FollowService {
  async follow(firstUserId, secondUserId) {
    const connection = Follow.create({
      followerId: firstUserId, followingId: secondUserId,
    });
    return connection;
  }

  async approve(firstUserId, secondUserId, next) {
    const approvedFollow = await Follow.findOne({
      where: {
        followerId: secondUserId,
        followingId: firstUserId,
      },
    });
    if (!approvedFollow) {
      next({ errorsArray: [{ msg: '440' }], title: 'Service Error' });
      return;
    }
    await approvedFollow.update({ approvedAt: (new Date()) });
    return approvedFollow;
  }

  async unfollow(unSubscriberId, userId) {
    const deletedConnection = await Follow.findOne({
      where: {
        followerId: userId,
        followingId: unSubscriberId,
      },
    });
    if (!deletedConnection) {
      const deletedConnection = await Follow.findOne({
        where: {
          followerId: unSubscriberId,
          followingId: userId,
        },
      });
      if (deletedConnection.approvedAt === null) {
        await deletedConnection.destroy();
        return null;
      }
      await deletedConnection.update({
        followerId: userId,
        followingId: unSubscriberId,
        approvedAt: null,
      });
      return deletedConnection;
    }
    await deletedConnection.update({ approvedAt: null });
    return deletedConnection;
  }

  async getFriends(id) {
    const connections = await Follow.findAll({
      include: [{
        model: User,
        association: 'following',
      }, {
        model: User,
        association: 'follower',
      }],
      where: {
        [Op.or]: [
          { followerId: id, approvedAt: { [Op.ne]: null } },
          { followingId: id, approvedAt: { [Op.ne]: null } },
        ],
      },
    });
    const friends = connections.map((item) => {
      if (item.dataValues.follower.dataValues.id === id) {
        return item.dataValues.following.dataValues;
      }
      return item.dataValues.follower.dataValues;
    });
    return friends;
  }

  async getSubscriptions(id) {
    const connections = await Follow.findAll({
      include: {
        model: User,
        association: 'following',
      },
      where: {
        followerId: id,
        approvedAt: null,
      },
    });
    const subscriptions = connections.map((item) => item.dataValues.following.dataValues);
    return subscriptions;
  }

  async getSubscribers(id) {
    const connections = await Follow.findAll({
      include: {
        model: User,
        association: 'follower',
      },
      where: {
        followingId: id,
        approvedAt: null,
      },
    });
    const subscribers = connections.map((item) => item.dataValues.follower.dataValues);
    return subscribers;
  }
}
export default new FollowService();
