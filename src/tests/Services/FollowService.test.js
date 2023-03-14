/* eslint-disable no-undef */
import FollowService from '../../services/FollowService.js';

describe('Follow Service : ', () => {
  test('Follow', async () => {
    const data = await FollowService.follow(1, 4);

    expect(data).toBeDefined();
    expect(data.followerId).toBe(1);
    expect(data.followingId).toBe(4);
  });
  test('Approve', async () => {
    const data = await FollowService.approve(4, 1);

    expect(data.followerId).toBe(1);
    expect(data.followingId).toBe(4);
  });
  test('Unfollow', async () => {
    const data = await FollowService.unfollow(4, 1);

    expect(data).toBeDefined();
    expect(data.approvedAt).toBe(0);

    await data.destroy();
  });
});
