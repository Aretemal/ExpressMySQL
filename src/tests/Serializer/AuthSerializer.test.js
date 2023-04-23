import { matchersWithOptions } from 'jest-json-schema';
import AuthSerializers from '../../serializers/AuthSerializer.js';
import UserSerializer from '../../serializers/UserSerializer.js';
import { getClass } from '../../utils/getClass.js';
import schema from './schema.json';

global[getClass] = getClass;

expect.extend(matchersWithOptions({
  verbose: true,
}));

describe('AuthSerializer :', () => {
  describe('Registration', () => {
    test('should return object with id and token', () => {
      const token = 'TOKEN';

      const serializer = new AuthSerializers(token);
      const data = serializer.serialize();

      expect(data).toMatchSnapshot();
      expect(data).toMatchSchema(schema);
    });
  });

  describe('Login', () => {
    test('should return object with id and token', () => {
      const token = 'TOKEN';

      const serializer = new AuthSerializers(token);
      const data = serializer.serialize();

      expect(data).toMatchSnapshot();
      expect(data).toMatchSchema(schema);
    });
  });
});
