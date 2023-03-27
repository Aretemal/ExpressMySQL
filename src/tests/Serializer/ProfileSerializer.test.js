import { matchersWithOptions } from 'jest-json-schema';
import UserSerializer from '../../serializers/UserSerializer.js';
import schema from './schema.json';

expect.extend(matchersWithOptions({
  verbose: true,
}));

describe('ProfileSerializer :', () => {
  describe('getInfoAuthorizedUser :', () => {
    test('should return info about user', () => {
      const user = {
        userId: 1,
        login: 'Artem',
        firstName: 'aaaa',
        lastName: 'bbbb',
        email: '111@11.1',
        status: '1',
        ava: null,
      };

      const serializer = new UserSerializer(user);
      const data = serializer.serialize();

      expect(data).toMatchSnapshot();
      expect(data).toMatchSchema(schema);
    });
  });

  describe('updateStatus :', () => {
    test('should return new status', () => {
      const user = {
        userId: 1,
        login: 'Artem',
        firstName: 'aaaa',
        lastName: 'bbbb',
        email: '111@11.1',
        status: '1',
        ava: null,
      };

      const serializer = new UserSerializer(user);
      const data = serializer.serialize();

      expect(data).toMatchSnapshot();
      expect(data).toMatchSchema(schema);
    });
  });

  describe('getStatus :', () => {
    test('should return status', () => {
      const user = {
        userId: 1,
        login: 'Artem',
        firstName: 'aaaa',
        lastName: 'bbbb',
        email: '111@11.1',
        status: '1',
        ava: null,
      };

      const serializer = new UserSerializer(user);
      const data = serializer.serialize();

      expect(data).toMatchSnapshot();
      expect(data).toMatchSchema(schema);
    });
  });
});
