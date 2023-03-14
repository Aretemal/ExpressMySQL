/* eslint-disable no-undef */
import AuthService from '../../services/AuthService.js';

describe('Auth Service : ', () => {
  test('Creates a new user', async () => {
    const data = await AuthService.registration(
      {
        userName: 'hot', password: '1234', firstName: 'Artem', lastName: 'Novik', email: 'A@gmail.com',
      },
    );

    expect(data).toBeDefined();
    expect(data.lastName).toBe('Novik');
    expect(data.login).toBe('hot');

    await data.destroy();
  });
  test('Authorization', async () => {
    const data = await AuthService.login({ login: 'user1', password: 'user1' });

    expect(data).toBeDefined();
    expect(data.token).toBeDefined();
    expect(data.user.login).toBe('user1');
    expect(data.user.userId).toBe(1);
  });
});
