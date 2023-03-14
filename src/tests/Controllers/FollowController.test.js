/* eslint-disable no-undef */
import { jest } from '@jest/globals';
import FollowController from '../../controllers/FollowController.js';
import FollowService from '../../services/FollowService.js';

jest.fn('../../services/FollowService.js');

const req = {
  user: {
    id: 1,
  },
  body: {
    id: 2,
  },
};
const res = {
  dataJS: null,
  json: (data) => {
    res.dataJS = data;
  },
};
describe('Follow Controller : ', () => {
  test('Creates a new connection', async () => {
    FollowService.follow = (firstUserId, secondUserId) => ({
      followerId: firstUserId, followingId: secondUserId, approvedAt: 0,
    });

    await FollowController.follow(req, res);

    expect(res.dataJS.data.attributes.attributes.followerId).toBe(1);
    expect(res.dataJS.data.attributes.attributes.followingId).toBe(2);
    expect(res.dataJS.data.attributes.attributes.approvedAt).toBe(0);
  });
  test('Approve connection', async () => {
    const timeD = new Date();
    const req1 = {
      user: {
        id: 2,
      },
      body: {
        id: 1,
      },
    };
    FollowService.approve = (firstUserId, secondUserId) => ({
      followerId: secondUserId, followingId: firstUserId, approvedAt: timeD,
    });

    await FollowController.approve(req1, res);

    expect(res.dataJS.data.attributes.attributes.followerId).toBe(1);
    expect(res.dataJS.data.attributes.attributes.followingId).toBe(2);
    expect(res.dataJS.data.attributes.attributes.approvedAt).toBe(timeD);
  });
  test('Unfollow', async () => {
    FollowService.unfollow = (firstUserId, secondUserId) => ({
      followerId: firstUserId, followingId: secondUserId, approvedAt: 0,
    });

    await FollowController.unfollow(req, res);

    expect(res.dataJS.data.attributes.attributes.followerId).toBe(1);
    expect(res.dataJS.data.attributes.attributes.followingId).toBe(2);
    expect(res.dataJS.data.attributes.attributes.approvedAt).toBe(0);
  });
});
