/* eslint-disable no-undef */
import { jest } from '@jest/globals';
import ProfileController from '../../controllers/ProfileController';
import ProfileService from '../../services/ProfileService';
import UserService from '../../services/UserService.js';

jest.fn('ProfileService');
const req = {
  params: {
    id: 1,
  },
  user: {
    id: 1,
  },
  body: {
    status: 'Status',
  },
};
const res = {
  dataJS: null,
  json: (data) => {
    res.dataJS = data;
  },
};

describe('Profile Controller :', () => {
  describe('getInfoAuthorizedUser :', () => {
    test('should return info authorized user', async () => {
      function next() {}
      ProfileService.getInfoAuthorizedUser = (id) => ({
        userId: id, login: 'Artem', firstName: 'Artem', lastName: 'Novik',
      });

      await ProfileController.getInfoAuthorizedUser(req, res, next);

      expect(req.serializer).toMatchSnapshot();
    });
  });

  describe('updateStatus :', () => {
    test('should return user', async () => {
      function next() {}
      ProfileService.updateStatus = (id) => ({
        userId: id, login: 'Artem', firstName: 'Artem', lastName: 'Novik',
      });

      await ProfileController.updateStatus(req, res, next);

      expect(req.serializer).toMatchSnapshot();
    });
  });

  describe('getStatus :', () => {
    test('should return user', async () => {
      function next() {}
      UserService.getStatus = (id) => ({
        userId: id, login: 'Artem', firstName: 'Artem', lastName: 'Novik',
      });

      await ProfileController.getStatus(req, res, next);

      expect(req.serializer).toMatchSnapshot();
    });
  });
});
