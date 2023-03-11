/* eslint-disable no-undef */
// NODE_OPTIONS=--experimental-vm-modules npx jest
import User from '../../models/user.js';
import AuthService from '../../services/AuthService.js';

describe('Auth Service : ', () => {
  test('Creates a new user', async () => {
    const data = await AuthService.registration(
      {
        userName: '1234', password: '1234', firstName: 'Artem', lastName: 'Novik', email: 'A@gmail.com',
      },
    );
    expect(data).toBeDefined();
    expect(data).toBeInstanceOf(User);
  });
  test('Authorization', async () => {
    const data = await AuthService.login({ login: '1234', password: '1234' });
    expect(data).toBeDefined();
    expect(data.token).toBeDefined();
    expect(data.user).toBeInstanceOf(User);
    await data.user.destroy();
  });
});
