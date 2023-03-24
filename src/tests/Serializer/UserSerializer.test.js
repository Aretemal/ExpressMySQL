import UserSerializer from '../../serializers/UserSerializer.js';
import UsersSerializer from '../../serializers/UsersSerializer.js';

describe('UserSerializer :', () => {
  describe('getOne :', () => {
    test('should return info about user', () => {
      const links = 'http://localhost:5000/api/user/1';
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

  describe('getAllUsers :', () => {
    test('should return array with info', () => {
      const links = 'http://localhost:5000/api/users';
      const countOfUsers = 2;
      const users = [{
        userId: 1,
        login: 'Artem',
        firstName: 'aaaa',
        lastName: 'bbbb',
        email: '111@11.1',
        status: '1',
        ava: null,
      },
      {
        userId: 1,
        login: 'Artem',
        firstName: 'aaaa',
        lastName: 'bbbb',
        email: '111@11.1',
        status: '1',
        ava: null,
      }];

      const serializer = new UsersSerializer({
        attributes: { users, countOfUsers }, link: links,
      }, UserSerializer);
      const data = serializer.serialize();

      expect(data).toMatchSnapshot();
    });
  });
});
