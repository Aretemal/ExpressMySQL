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
  test('Get info one user', async () => {
    UserService.getOne = (id) => ({
      userId: id, login: 'Artem', firstName: 'Artem', lastName: 'Novik',
    });

    await UserController.getOne(req, res);

    expect(res.dataJS.data.attributes.attributes.userId).toBe(1);
    expect(res.dataJS.data.attributes.attributes.firstName).toBe('Artem');
    expect(res.dataJS.data.attributes.attributes.lastName).toBe('Novik');
  });
});
