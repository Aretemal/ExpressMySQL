/* eslint-disable no-undef */
import UserService from '../../services/UserService.js';
import User from '../../models/user.js';

describe('User Service :', () => {
  test('Get one user', async () => {
    const data = await UserService.getOne(1);

    expect(data).toBeDefined();
    expect(data).toBeInstanceOf(User);
  });
});
