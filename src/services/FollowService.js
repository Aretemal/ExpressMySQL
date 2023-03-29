import Follow from '../models/follow.js';

class FollowService {
  async follow(firstUserId, secondUserId) {
    const connection = Follow.create({
      followerId: firstUserId, followingId: secondUserId,
    });
    return connection;
  }

  async approve(firstUserId, secondUserId) {
    const approvedFollow = await Follow.findOne({
      where: {
        followerId: secondUserId,
        followingId: firstUserId,
      },
    });
    if (!approvedFollow) {
      throw new Error('Такой связи не существует');
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
      if (deletedConnection.approvedAt.getFullYear() === 1970) {
        await deletedConnection.destroy();
        return null;
      }
      await deletedConnection.update({
        userId1: userId,
        userId2: unSubscriberId,
        approvedAt: new Date(0),
      });
      return deletedConnection;
    }
    await deletedConnection.update({ approvedAt: new Date(0) });
    return deletedConnection;
  }
}
export default new FollowService();
