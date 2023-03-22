import ProfileSerializer from '../../utils/JsonSerializer/ProfileSerializer.js';

describe('ProfileSerializer :', () => {
  describe('getInfoAuthorizedUser :', () => {
    test('should return info about user', () => {
      const links = 'http://localhost:5000/api/profile/user';
      const user = {
        id: 1,
        login: 'Artem',
        firstName: 'aaaa',
        lastName: 'bbbb',
        email: '111@11.1',
      };

      const data = ProfileSerializer.getInfoAuthorizedUser(user, links, 1);

      expect(data).toMatchSnapshot();
    });
  });

  describe('updateStatus :', () => {
    test('should return new status', () => {
      const links = 'http://localhost:5000/api/profile/status';
      const status = { status: 'Hello world' };

      const data = ProfileSerializer.updateStatus(status, links, 1);

      expect(data).toMatchSnapshot();
    });
  });
});
