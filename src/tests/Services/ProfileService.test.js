/* eslint-disable no-undef */
import ProfileService from '../../services/ProfileService.js';

describe('Profile Service : ', () => {
  test('Returns user information', async () => {
    const data = await ProfileService.getInfoAuthorizedUser(1);

    expect(data).toBeDefined();
    expect(data.userId).toBe(1);
  });
  test('Update status', async () => {
    const data = await ProfileService.updateStatus('User', 1);

    expect(data).toBeDefined();
    expect(data.status).toBe('User');
  });
});
