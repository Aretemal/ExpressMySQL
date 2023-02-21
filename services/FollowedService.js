import Subscriber from '../models/Subscriber.js';

class FollowedService {
  async follow(firstUserId, secondUserId) {
    await Subscriber.create({
      firstUserId, secondUserId, firstSubToSecond: 1, secondSubToFirst: 0,
    });
    return { resultCode: 0 };
  }

  async followBack(secondUserId, firstUserId) {
    console.log(secondUserId, firstUserId);
    const followConnection = await Subscriber.findOne({
      where: {
        firstUserId,
        secondUserId,
      },
    });
    await followConnection.update({ secondSubToFirst: 1 });
    return { resultCode: 0 };
  }

  async unfollow(unSubscriberId, userId) {
    const deletedConnection = await Subscriber.findOne({
      where: {
        firstUserId: userId,
        secondUserId: unSubscriberId,
      },
    });
    if (!deletedConnection) {
      const deletedConnection = await Subscriber.findOne({
        where: {
          firstUserId: unSubscriberId,
          secondUserId: userId,
        },
      });
      await deletedConnection.update({ firstSubToSecond: 0 });
      return { resultCode: 0 };
    }
    await deletedConnection.update({ secondSubToFirst: 0 });
    return { resultCode: 0 };
  }
}
export default new FollowedService();
