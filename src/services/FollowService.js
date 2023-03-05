import Follow from '../models/follow.js';

class FollowService {
  async follow(firstUserId, secondUserId) {
    const connection = Follow.create({
      followerId: firstUserId, followingId: secondUserId, approvedAt: 0,
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
    await approvedFollow.update({ approvedAt: (new Date()).toString() });
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
      if (deletedConnection.approvedAt === '0') {
        await deletedConnection.destroy();
        console.log(deletedConnection);
        return null;
      }
      await deletedConnection.update({ userId1: userId, userId2: unSubscriberId, approvedAt: 0 });
      return deletedConnection;
    }
    await deletedConnection.update({ approvedAt: 0 });
    return deletedConnection;
  }
}
export default new FollowService();
