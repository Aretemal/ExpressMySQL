import UserSerializer from '../../serializers/UserSerializer.js';

describe('ProfileSerializer :', () => {
  describe('getInfoAuthorizedUser :', () => {
    test('should return info about user', () => {
      const links = 'http://localhost:5000/api/profile/user';
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

  describe('updateStatus :', () => {
    test('should return new status', () => {
      const links = 'http://localhost:5000/api/profile/status';
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

  describe('getStatus :', () => {
    test('should return status', () => {
      const links = 'http://localhost:5000/api/profile/status/1';
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
});
