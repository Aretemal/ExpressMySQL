import UserSerializers from '../../serializers/UserSerializers.js';

describe('UserSerializers :', () => {
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

      const data = UserSerializers.userSerialize(user, links, 'ObjectUser', user.id);

      expect(data).toMatchSnapshot();
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

      const data = UserSerializers.userSerialize({ users, countOfUsers, userAuth }, links, 'Array Users', userAuth.id);

      expect(data).toMatchSnapshot();
    });
  });
});
