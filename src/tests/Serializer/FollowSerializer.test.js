import FollowSerializer from '../../serializers/FollowSerializer.js';

describe('FollowSerializers :', () => {
  describe('Follow :', () => {
    test('should return connection with info', () => {
      const follow = {
        id: 21, followerId: 1, followingId: 2, approvedAt: 0,
      };

      const serializer = new FollowSerializer(follow);
      const data = serializer.serialize();

      expect(data).toMatchSnapshot();
    });
  });

  describe('Approve :', () => {
    test('should return connection with info', () => {
      const follow = {
        id: 21, followerId: 1, followingId: 2, approvedAt: 1,
      };

      const serializer = new FollowSerializer(follow);
      const data = serializer.serialize();

      expect(data).toMatchSnapshot();
    });
  });

  describe('Unfollow :', () => {
    test('should return connection with info', () => {
      const follow = {
        id: 21, followerId: 1, followingId: 2, approvedAt: 0,
      };

      const serializer = new FollowSerializer(follow);
      const data = serializer.serialize();

      expect(data).toMatchSnapshot();
    });
  });
});
