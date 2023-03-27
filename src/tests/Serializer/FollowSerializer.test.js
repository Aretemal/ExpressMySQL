import { matchersWithOptions } from 'jest-json-schema';
import FollowSerializer from '../../serializers/FollowSerializer.js';
import schema from './schema.json';

expect.extend(matchersWithOptions({
  verbose: true,
}));

describe('FollowSerializers :', () => {
  describe('Follow :', () => {
    test('should return connection with info', () => {
      const follow = {
        id: 21, followerId: 1, followingId: 2, approvedAt: 0,
      };

      const serializer = new FollowSerializer(follow);
      const data = serializer.serialize();

      expect(data).toMatchSnapshot();
      expect(data).toMatchSchema(schema);
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
      expect(data).toMatchSchema(schema);
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
      expect(data).toMatchSchema(schema);
    });
  });
});
