/* eslint-disable no-undef */
import { jest } from '@jest/globals';
import UserController from '../../controllers/UserController';
import UserService from '../../services/UserService';

jest.fn('UserService');
const req = {
  params: {
    id: 1,
  },
};
const res = {
  dataJS: null,
  json: (data) => {
    res.dataJS = data;
  },
};

describe('User Controller :', () => {
  describe('getOne :', () => {
    test('should return info one user', async () => {
      function next() {}
      UserService.getOne = (id) => ({
        userId: id, login: 'Artem', firstName: 'Artem', lastName: 'Novik',
      });

      await UserController.getOne(req, res, next);

      expect(req.serializer)
        .toMatchSnapshot();
    });
  });

  describe('getAllUsers :', () => {
    test('should return array of users and count of users', async () => {
      function next() {}
      UserService.getOne = (id) => ({
        users: [{
          userId: id,
          login: 'Artem',
          firstName: 'Artem',
          lastName: 'Novik',
        }],
        countOfUsers: 5,
      });

      await UserController.getOne(req, res, next);

      expect(req.serializer)
        .toMatchSnapshot();
    });
  });
});
