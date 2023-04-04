import { matchersWithOptions } from 'jest-json-schema';
import CollectionSerializer from '../../serializers/CollectionSerializer.js';
import DialogSerializer from '../../serializers/DialogSerializer.js';
import UserSerializer from '../../serializers/UserSerializer.js';
import schema from './schema.json';

expect.extend(matchersWithOptions({
  verbose: true,
}));

describe('DialogSerializer :', () => {
  describe('sendMessage :', () => {
    test('should return created message', () => {
      const message = {
        senderId: 1,
        recipientId: 2,
        message: 'Hello',
      };

      const serializer = new DialogSerializer(message);
      const data = serializer.serialize();

      expect(data).toMatchSnapshot();
      expect(data).toMatchSchema(schema);
    });
  });

  describe('getAllMessage :', () => {
    test('should return array with messages', () => {
      const messages = [{
        senderId: 1,
        recipientId: 2,
        message: 'Hello',
      },
      {
        senderId: 2,
        recipientId: 3,
        message: 'Hel1lo',
      }];

      const serializer = new CollectionSerializer(messages, DialogSerializer, { originalUrl: 'example' });
      const data = serializer.serialize();

      expect(data).toMatchSnapshot();
      expect(data).toMatchSchema(schema);
    });
  });

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

      const serializer = new CollectionSerializer(users, UserSerializer, { originalUrl: 'example' });
      const data = serializer.serialize();

      expect(data).toMatchSnapshot();
      expect(data).toMatchSchema(schema);
    });
  });
});
