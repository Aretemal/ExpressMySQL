/* eslint-disable no-undef */
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
  test('Creates a new user', async () => {
    AuthService.registration = ({
      id, userName: login, password, firstName, lastName, email,
    }) => ({
      userId: id, login, firstName, lastName, email, password,
    });

    await AuthController.registration(req, res);

    expect(res.dataJS.data.attributes.attributes.userId).toBe(1);
    expect(res.dataJS.data.attributes.attributes.firstName).toBe('Artem');
    expect(res.dataJS.data.attributes.attributes.lastName).toBe('Novik');
  });

  test('Authorization', async () => {
    AuthService.login = ({ login, password }) => ({
      user: { id: 1 }, token: 'token', login, password,
    });

    await AuthController.login(req, res);

    expect(res.dataJS.data.attributes.attributes.token).toBe('token');
    expect(res.dataJS.data.attributes.attributes.user).toBeDefined();
    expect(res.dataJS.data.attributes.attributes.password).toBeDefined();
    expect(res.dataJS.data.attributes.attributes.login).toBeDefined();
  });
});
