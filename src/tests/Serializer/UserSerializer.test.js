import { matchersWithOptions } from 'jest-json-schema';
import CollectionSerializer from '../../serializers/CollectionSerializer.js';
import UserSerializer from '../../serializers/UserSerializer.js';
import schema from './schema.json';

expect.extend(matchersWithOptions({
  verbose: true,
}));

describe('UserSerializer :', () => {
  describe('getOne :', () => {
    test('should return info about user', () => {
      const user = {
        id: 1,
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

  describe('getAllUsers :', () => {
    test('should return array with info', () => {
      const countOfUsers = 2;
      const users = [{
        id: 3,
        login: 'dsdsd',
        firstName: 'assaaa',
        lastName: 'bbsbb',
        email: '111s@11.1',
        status: '1s',
        ava: null,
      },
      {
        id: 1,
        login: 'Artem',
        firstName: 'aaaa',
        lastName: 'bbbb',
        email: '111@11.1',
        status: '1',
        ava: null,
      }];

      const serializer = new CollectionSerializer(
        users,
        {
          serializerType: UserSerializer,
          metaData: { countOfUsers },
        },
      );
      const data = serializer.serialize({ originalUrl: 'example' });

      expect(data).toMatchSnapshot();
      expect(data).toMatchSchema(schema);
    });
  });
});
