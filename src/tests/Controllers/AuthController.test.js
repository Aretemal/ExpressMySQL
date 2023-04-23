/* eslint-disable no-undef, no-unused-vars */
import { jest } from '@jest/globals';
import AuthController from '../../controllers/AuthController';
import AuthService from '../../services/AuthService.js';

jest.fn('AuthService');
const req = {
  body: {
    id: 1,
    login: 'Artem',
    firstName: 'Artem',
    lastName: 'Novik',
    password: 'pass',
  },
};
const res = {
  dataJS: null,
  json: (data) => {
    res.dataJS = data;
  },
};

describe('Auth Controller :', () => {
  describe('Registration', () => {
    test('should create a new user and return token and id', async () => {
      function next() {}

      AuthService.registration = ({
        userName: login,
        password,
        firstName,
        lastName,
        email,
      }) => ({
        id: 1,
        token: 'token',
      });

      await AuthController.registration(req, res, next);

      expect(req.serializer)
        .toMatchSnapshot();
    });
  });

  describe('Login', () => {
    test('should return token and id', async () => {
      function next() {}

      AuthService.login = ({ login, password }) => ({
        id: 1, token: 'token',
      });

      await AuthController.login(req, res, next);

      expect(req.serializer).toMatchSnapshot();
    });
  });
});
