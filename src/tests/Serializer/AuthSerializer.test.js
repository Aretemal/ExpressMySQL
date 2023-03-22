import AuthSerializer from '../../utils/JsonSerializer/AuthSerializer.js';

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

      const data = AuthSerializer.registration(user, links);

      expect(data.data.id).toBe(1);
      expect(data.data.type).toBe('ObjectUser');
      expect(data.data.attributes.firstName).toBe('aaaa');
      expect(data.links.self).toBe('http://localhost:5000/api/registration');
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

      const data = AuthSerializer.login({ token, user }, links);

      expect(data.data.id).toBe(1);
      expect(data.data.type).toBe('Token');
      expect(data.data.attributes.firstName).toBe('aaaa');
      expect(data.data.token).toBe('TOKEN');
      expect(data.links.self).toBe('http://localhost:5000/api/login');
    });
  });
});
