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

describe('Follow Controller :', () => {
  describe('Follow', () => {
    test('should create and return a new connection', async () => {
      function next() {}

      FollowService.follow = (firstUserId, secondUserId) => ({
        followerId: firstUserId,
        followingId: secondUserId,
        approvedAt: 0,
      });

      await FollowController.follow(req, res, next);

      expect(req.serializer)
        .toMatchSnapshot();
    });
  });

  describe('Approve', () => {
    test('should changed connection', async () => {
      function next() {
      }

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
        followerId: secondUserId,
        followingId: firstUserId,
        approvedAt: timeD,
      });

      await FollowController.approve(req1, res, next);

      expect(req.serializer)
        .toMatchSnapshot();
    });
  });

  describe('Unfollow', () => {
    test('should return deleted connection', async () => {
      function next() {
      }

      FollowService.unfollow = (firstUserId, secondUserId) => ({
        followerId: firstUserId,
        followingId: secondUserId,
        approvedAt: 0,
      });

      await FollowController.unfollow(req, res, next);

      expect(req.serializer)
        .toMatchSnapshot();
    });
  });

  describe('getFriends', () => {
    test('should return array of users', async () => {
      function next() {
      }

      FollowService.getFriends = (id) => ([{
        id,
        firstName: 'example',
        lastName: 'example',
        ava: 'example',
        login: 'example',
        status: 'example',
        email: 'example',
      }]);

      await FollowController.getFriends(req, res, next);

      expect(req.serializer)
        .toMatchSnapshot();
    });
  });

  describe('getSubscriptions', () => {
    test('should return array of users', async () => {
      function next() {
      }

      FollowService.getSubscriptions = (id) => ([{
        id,
        firstName: 'example',
        lastName: 'example',
        ava: 'example',
        login: 'example',
        status: 'example',
        email: 'example',
      }]);

      await FollowController.getSubscriptions(req, res, next);

      expect(req.serializer)
        .toMatchSnapshot();
    });
  });

  describe('getSubscribers', () => {
    test('should return array of users', async () => {
      function next() {
      }

      FollowService.getSubscribers = (id) => ([{
        id,
        firstName: 'example',
        lastName: 'example',
        ava: 'example',
        login: 'example',
        status: 'example',
        email: 'example',
      }]);

      await FollowController.getSubscribers(req, res, next);

      expect(req.serializer)
        .toMatchSnapshot();
    });
  });
});
