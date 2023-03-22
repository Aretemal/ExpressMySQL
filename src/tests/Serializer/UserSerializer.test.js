import UserSerializer from '../../utils/JsonSerializer/UserSerializer.js';

describe('UserSerializer :', () => {
  describe('getOne :', () => {
    test('should return info about user', () => {
      const links = 'http://localhost:5000/api/user/1';
      const user = {
        id: 1,
        login: 'Artem',
        firstName: 'aaaa',
        lastName: 'bbbb',
        email: '111@11.1',
      };

      const data = UserSerializer.getOne(user, links);

      expect(data.data.attributes.firstName).toBe('aaaa');
      expect(data.data.id).toBe(1);
      expect(data.data.type).toBe('ObjectUser');
      expect(data.links.self).toBe('http://localhost:5000/api/user/1');
    });
  });

  describe('getAllUsers :', () => {
    test('should return array with info', () => {
      const links = 'http://localhost:5000/api/users';
      const countOfUsers = 2;
      const userAuth = { id: 1, login: 'Artem' };
      const users = [{
        id: 1,
        login: 'Artem',
        firstName: 'aaaa',
        lastName: 'bbbb',
        email: '111@11.1',
      },
      {
        id: 2,
        login: 'hello',
        firstName: 'Artem',
        lastName: 'Oleg',
        email: '111@11.1',
      }];

      const data = UserSerializer.getAllUsers({ users, countOfUsers, userAuth }, links);

      expect(data.data.attributes.users[1].login).toBe('hello');
      expect(data.data.attributes.countOfUsers).toBe(2);
      expect(data.data.id).toBe(1);
      expect(data.data.type).toBe('Array Users');
      expect(data.links.self).toBe('http://localhost:5000/api/users');
    });
  });

  describe('getStatus :', () => {
    test('should return status', () => {
      const links = 'http://localhost:5000/api/profile/status/1';
      const statusWithId = { id: 1, status: 'Hello world' };

      const data = UserSerializer.getStatus(statusWithId, links);

      expect(data.data.attributes.status).toBe('Hello world');
      expect(data.data.id).toBe(1);
      expect(data.data.type).toBe('Status');
      expect(data.links.self).toBe('http://localhost:5000/api/profile/status/1');
    });
  });
});
