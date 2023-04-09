import { matchersWithOptions } from 'jest-json-schema';
import CollectionSerializer from '../../serializers/CollectionSerializer.js';
import UserSerializer from '../../serializers/UserSerializer.js';
import { getClass } from '../../utils/getClass.js';
import schema from './schema.json';

expect.extend(matchersWithOptions({
  verbose: true,
}));

global[getClass] = getClass;

describe('DialogSerializer :', () => {
  describe('getAllInterlocutors :', () => {
    test('should return array of users', () => {
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

      const serializer = new CollectionSerializer(users, { serializerType: UserSerializer });
      const data = serializer.serialize({ originalUrl: 'example' });

      expect(data).toMatchSnapshot();
      expect(data).toMatchSchema(schema);
    });
  });
});
