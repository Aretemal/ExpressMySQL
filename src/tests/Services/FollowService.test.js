/* eslint-disable no-undef */
import FollowService from '../../services/FollowService.js';

describe('Follow Service :', () => {
  describe('follow :', () => {
    test('should return connection between users', async () => {
      function next() {}

      const data = await FollowService.follow(1, 8, next);

      expect(data).toBeDefined();
      expect(data.followerId).toBe(1);
      expect(data.followingId).toBe(8);
    });
  });

  describe('approve :', () => {
    test('should return updated connection between users', async () => {
      function next() {}

      const data = await FollowService.approve(8, 1, next);

      expect(data.followerId).toBe(1);
      expect(data.followingId).toBe(8);
    });
  });

  describe('unfollow :', () => {
    test('should return deleted connection between users', async () => {
      function next() {}

      const data = await FollowService.unfollow(8, 1, next);

      expect(data).toBeDefined();
      expect(data.approvedAt).toBe(0);

      await data.destroy();
    });
  });
});
