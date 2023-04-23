/* eslint-disable no-undef */
import User from '../../models/user.js';
import AuthService from '../../services/AuthService.js';

describe('Auth Service :', () => {
  describe('registration :', () => {
    test('should create a new user and return token and id', async () => {
      function next() {}

      const data = await AuthService.registration({
        userName: 'example1', password: 'example1', firstName: 'example1', lastName: 'example1', email: 'example@example.co1m',
      }, next);

      expect(data.token).toBeDefined();
      expect(data.id).toBeDefined();

      const user = await User.findOne({ where: { id: data.id } });
      await user.destroy();
    });
  });

  describe('login :', () => {
    test('should return token and id', async () => {
      function next() {}

      const data = await AuthService.login({ login: 'user1', password: 'user1' }, next);

      expect(data.token).toBeDefined();
      expect(data.id).toBeDefined();
    });
  });
});
