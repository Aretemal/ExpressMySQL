import FollowSerializer from '../../utils/JsonSerializer/FollowSerializer.js';

describe('FollowSerializer :', () => {
  describe('Follow :', () => {
    test('should return connection with info', () => {
      const links = 'http://localhost:5000/api/follow';
      const connection = {
        id: 21, followerId: 1, followingId: 2, approvedAt: 0,
      };

      const data = FollowSerializer.follow(connection, links);

      expect(data.data.attributes.followerId).toBe(1);
      expect(data.data.id).toBe(21);
      expect(data.data.attributes.followingId).toBe(2);
      expect(data.data.attributes.approvedAt).toBe(0);
      expect(data.data.type).toBe('Follow connection');
      expect(data.links.self).toBe('http://localhost:5000/api/follow');
    });
  });

  describe('Approve :', () => {
    test('should return connection with info', () => {
      const links = 'http://localhost:5000/api/approve';
      const connection = {
        id: 21, followerId: 1, followingId: 2, approvedAt: 1,
      };

      const data = FollowSerializer.approve(connection, links);

      expect(data.data.attributes.followerId).toBe(1);
      expect(data.data.id).toBe(21);
      expect(data.data.attributes.followingId).toBe(2);
      expect(data.data.attributes.approvedAt).toBe(1);
      expect(data.data.type).toBe('Approve connection');
      expect(data.links.self).toBe('http://localhost:5000/api/approve');
    });
  });

  describe('Unfollow :', () => {
    test('should return connection with info', () => {
      const links = 'http://localhost:5000/api/unfollow';
      const connection = {
        id: 21, followerId: 1, followingId: 2, approvedAt: 0,
      };

      const data = FollowSerializer.unfollow(connection, links);

      expect(data.data.attributes.followerId).toBe(1);
      expect(data.data.id).toBe(21);
      expect(data.data.attributes.followingId).toBe(2);
      expect(data.data.attributes.approvedAt).toBe(0);
      expect(data.data.type).toBe('Unfollow connection');
      expect(data.links.self).toBe('http://localhost:5000/api/unfollow');
    });
  });
});
