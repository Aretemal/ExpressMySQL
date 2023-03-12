/* eslint-disable no-undef */
import Follow from '../../models/follow.js';
import FollowService from '../../services/FollowService.js';

describe('Follow Service : ', () => {
  test('Follow', async () => {
    const data = await FollowService.follow(1, 9);
    expect(data).toBeDefined();
    expect(data.followerId).toBe(1);
    expect(data.followingId).toBe(9);
    expect(data).toBeInstanceOf(Follow);
  });
  test('Approve', async () => {
    const data = await FollowService.approve(9, 1);
    expect(data.followerId).toBe(1);
    expect(data.followingId).toBe(9);
    expect(data).toBeInstanceOf(Follow);
  });
  test('Unfollow', async () => {
    const data = await FollowService.unfollow(9, 1);
    expect(data).toBeDefined();
    expect(data).toBeInstanceOf(Follow);
    expect(data.approvedAt).toBe(0);
    await data.destroy();
  });
});
