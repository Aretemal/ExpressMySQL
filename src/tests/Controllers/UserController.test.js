/* eslint-disable no-undef */
// NODE_OPTIONS=--experimental-vm-modules npx jest src/tests/Controllers
import sinon from 'sinon';
import UserController from '../../controllers/UserController';
import UserService from '../../services/UserService';
import { req, res } from './ReqRes.js';

describe('User Controller : ', () => {
  test('Get info one user', async () => {
    const stub = sinon.stub(UserService, 'getOne');
    stub.returns({
      userId: 1, login: 'Artem', firstName: 'Artem', lastName: 'Novik',
    });
    await UserController.getOne(req, res);
    expect(res.dataJS.data.attributes.attributes.userId).toBe(1);
    expect(res.dataJS.data.attributes.attributes.firstName).toBe('Artem');
    expect(res.dataJS.data.attributes.attributes.lastName).toBe('Novik');
  });
  test('Get status', async () => {
    const stub = sinon.stub(UserService, 'getStatus');
    stub.returns('Status');
    await UserController.getStatus(req, res);
    expect(res.dataJS.data.attributes.attributes).toBe('Status');
  });
});
