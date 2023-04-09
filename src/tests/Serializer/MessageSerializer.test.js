import { matchersWithOptions } from 'jest-json-schema';
import CollectionSerializer from '../../serializers/CollectionSerializer.js';
import MessageSerializer from '../../serializers/MessageSerializer.js';
import { getClass } from '../../utils/getClass.js';
import schema from './schema.json';

expect.extend(matchersWithOptions({
  verbose: true,
}));

describe('MessageSerializer :', () => {
  describe('sendMessage :', () => {
    test('should return created message', () => {
      const message = {
        id: 1,
        senderId: 1,
        recipientId: 2,
        message: 'Hello',
      };

      const serializer = new MessageSerializer(message);
      const data = serializer.serialize();

      expect(data).toMatchSnapshot();
      expect(data).toMatchSchema(schema);
    });
  });

  describe('getAllMessage :', () => {
    test('should return array with messages', () => {
      const messages = [{
        id: 1,
        senderId: 2,
        message: 'Hello',
        dialogId: 1,
        user: {
          id: 2,
          login: 'Ar3tem',
          firstName: 'a4aaa',
          lastName: 'bb5bb',
          email: '111@161.1',
          status: '16',
          ava: null,
        },
      }, {
        id: 2,
        senderId: 1,
        message: 'Hel1lo',
        dialogId: 1,
        user: {
          id: 1,
          login: 'Artem',
          firstName: 'aaaa',
          lastName: 'bbbb',
          email: '111@11.1',
          status: '1',
          ava: null,
        },
      }];

      const serializer = new CollectionSerializer(
        messages,
        {
          serializerType: MessageSerializer,
          include: ['user'],
          getter: getClass,
        },
      );
      const data = serializer.serialize({ originalUrl: 'example' });

      expect(data).toMatchSnapshot();
      expect(data).toMatchSchema(schema);
    });
  });
});
