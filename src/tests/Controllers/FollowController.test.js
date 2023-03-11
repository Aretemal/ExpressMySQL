/* eslint-disable no-undef */
// NODE_OPTIONS=--experimental-vm-modules npx jest
import sinon from 'sinon';
import FollowController from '../../controllers/FollowController';
import FollowService from '../../services/FollowService';
import { req, res } from './ReqRes.js';

describe('Follow Controller : ', () => {
  test('Creates a new connection', async () => {
    const stub = sinon.stub(FollowService, 'follow');
    stub.returns({ followerId: 1, followingId: 2, approvedAt: 0 });
    await FollowController.follow(req, res);
    expect(res.dataJS.data.attributes.attributes.followerId).toBe(1);
    expect(res.dataJS.data.attributes.attributes.followingId).toBe(2);
    expect(res.dataJS.data.attributes.attributes.approvedAt).toBe(0);
  });
  test('Approve connection', async () => {
    const stub = sinon.stub(FollowService, 'approve');
    const timeD = new Date();
    stub.returns({ followerId: 1, followingId: 2, approvedAt: timeD });
    await FollowController.approve(req, res);
    expect(res.dataJS.data.attributes.attributes.followerId).toBe(1);
    expect(res.dataJS.data.attributes.attributes.followingId).toBe(2);
    expect(res.dataJS.data.attributes.attributes.approvedAt).toBe(timeD);
  });
  test('Unfollow', async () => {
    const stub = sinon.stub(FollowService, 'unfollow');
    stub.returns({ followerId: 1, followingId: 2, approvedAt: 0 });
    await FollowController.unfollow(req, res);
    expect(res.dataJS.data.attributes.attributes.followerId).toBe(1);
    expect(res.dataJS.data.attributes.attributes.followingId).toBe(2);
    expect(res.dataJS.data.attributes.attributes.approvedAt).toBe(0);
  });
});
