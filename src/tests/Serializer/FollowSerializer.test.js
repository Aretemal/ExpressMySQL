import FollowSerializer from '../../utils/JsonSerializer/FollowSerializer.js';

describe('FollowSerializer :', () => {
  describe('Follow :', () => {
    test('should return connection with info', () => {
      const links = 'http://localhost:5000/api/follow';
      const connection = {
        id: 21, followerId: 1, followingId: 2, approvedAt: 0,
      };

      const data = FollowSerializer.follow(connection, links);

      expect(data).toMatchSnapshot();
    });
  });

  describe('Approve :', () => {
    test('should return connection with info', () => {
      const links = 'http://localhost:5000/api/approve';
      const connection = {
        id: 21, followerId: 1, followingId: 2, approvedAt: 1,
      };

      const data = FollowSerializer.approve(connection, links);

      expect(data).toMatchSnapshot();
    });
  });

  describe('Unfollow :', () => {
    test('should return connection with info', () => {
      const links = 'http://localhost:5000/api/unfollow';
      const connection = {
        id: 21, followerId: 1, followingId: 2, approvedAt: 0,
      };

      const data = FollowSerializer.unfollow(connection, links);

      expect(data).toMatchSnapshot();
    });
  });
});
