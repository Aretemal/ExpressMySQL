import FollowSerializer from '../../serializers/FollowSerializer.js';

describe('FollowSerializers :', () => {
  describe('Follow :', () => {
    test('should return connection with info', () => {
      const links = 'http://localhost:5000/api/follow';
      const follow = {
        id: 21, followerId: 1, followingId: 2, approvedAt: 0,
      };

      const serializer = new FollowSerializer({
        attributes: follow, link: links,
      });
      const data = serializer.serialize();

      expect(data).toMatchSnapshot();
    });
  });

  describe('Approve :', () => {
    test('should return connection with info', () => {
      const links = 'http://localhost:5000/api/approve';
      const follow = {
        id: 21, followerId: 1, followingId: 2, approvedAt: 1,
      };

      const serializer = new FollowSerializer({
        attributes: follow, link: links,
      });
      const data = serializer.serialize();

      expect(data).toMatchSnapshot();
    });
  });

  describe('Unfollow :', () => {
    test('should return connection with info', () => {
      const links = 'http://localhost:5000/api/unfollow';
      const follow = {
        id: 21, followerId: 1, followingId: 2, approvedAt: 0,
      };

      const serializer = new FollowSerializer({
        attributes: follow, link: links,
      });
      const data = serializer.serialize();

      expect(data).toMatchSnapshot();
    });
  });
});
