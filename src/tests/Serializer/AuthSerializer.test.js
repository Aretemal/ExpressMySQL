import AuthSerializers from '../../utils/JsonSerializer/AuthSerializers.js';

describe('AuthSerializer :', () => {
  describe('Registration', () => {
    test('should return object with data about user', () => {
      const links = 'http://localhost:5000/api/registration';
      const user = {
        id: 1,
        login: 'Artem',
        firstName: 'aaaa',
        lastName: 'bbbb',
        email: '111@11.1',
      };

      const data = AuthSerializers.registration(user, links);

      expect(data).toMatchSnapshot();
    });
  });

  describe('Login', () => {
    test('should return object and token', () => {
      const links = 'http://localhost:5000/api/login';
      const user = {
        id: 1,
        login: 'Artem',
        firstName: 'aaaa',
        lastName: 'bbbb',
        email: '111@11.1',
      };
      const token = 'TOKEN';

      const data = AuthSerializers.login({ token, user }, links);

      expect(data).toMatchSnapshot();
    });
  });
});
