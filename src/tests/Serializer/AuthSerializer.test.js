import AuthSerializers from '../../serializers/AuthSerializer.js';
import UserSerializer from '../../serializers/UserSerializer.js';

describe('AuthSerializer :', () => {
  describe('Registration', () => {
    test('should return object with data about user', () => {
      const links = 'http://localhost:5000/api/registration';
      const user = {
        userId: 1,
        login: 'Artem',
        firstName: 'aaaa',
        lastName: 'bbbb',
        email: '111@11.1',
        status: '1',
        ava: null,
      };

      const serializer = new UserSerializer({
        attributes: user, link: links,
      });
      const data = serializer.serialize();

      expect(data).toMatchSnapshot();
    });
  });

  describe('Login', () => {
    test('should return object and token', () => {
      const links = 'http://localhost:5000/api/login';
      const token = 'TOKEN';

      const serializer = new AuthSerializers({ token, link: links });
      const data = serializer.serialize();

      expect(data).toMatchSnapshot();
    });
  });
});
