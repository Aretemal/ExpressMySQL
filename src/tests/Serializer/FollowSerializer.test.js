import FollowSerializers from '../../serializers/FollowSerializers.js';

describe('FollowSerializers :', () => {
  describe('Follow :', () => {
    test('should return connection with info', () => {
      const links = 'http://localhost:5000/api/follow';
      const connection = {
        id: 21, followerId: 1, followingId: 2, approvedAt: 0,
      };

      const data = FollowSerializers.followSerialize(connection, links, 'Follow', connection.id);

      expect(data).toMatchSnapshot();
    });
  });

  describe('Approve :', () => {
    test('should return connection with info', () => {
      const links = 'http://localhost:5000/api/approve';
      const connection = {
        id: 21, followerId: 1, followingId: 2, approvedAt: 1,
      };

      const data = FollowSerializers.followSerialize(connection, links, 'Approve', connection.id);

      expect(data).toMatchSnapshot();
    });
  });

  describe('Unfollow :', () => {
    test('should return connection with info', () => {
      const links = 'http://localhost:5000/api/unfollow';
      const connection = {
        id: 21, followerId: 1, followingId: 2, approvedAt: 0,
      };

      const data = FollowSerializers.followSerialize(connection, links, 'Unfollow', connection.id);

      expect(data).toMatchSnapshot();
    });
  });
});
