/* eslint-disable no-undef */
// NODE_OPTIONS=--experimental-vm-modules npx jest
import UserService from '../../services/UserService.js';
import User from '../../models/user.js';

describe('User Service : ', () => {
  test('Get one user', async () => {
    const data = await UserService.getOne(1);
    expect(data).toBeDefined();
    expect(data).toBeInstanceOf(User);
  });
  test('Get status', async () => {
    const data = await UserService.getStatus(1);
    expect(data).toBeDefined();
  });
});
