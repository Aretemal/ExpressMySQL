/* eslint-disable no-undef */
// NODE_OPTIONS=--experimental-vm-modules npx jest
import sinon from 'sinon';
import AuthController from '../../controllers/AuthController';
import AuthService from '../../services/AuthService.js';
import { req, res } from './ReqRes.js';

describe('Auth Controller : ', () => {
  test('Creates a new user', async () => {
    const stub = sinon.stub(AuthService, 'registration');
    stub.returns({
      userId: 1, login: 'Artem', firstName: 'Artem', lastName: 'Novik',
    });
    await AuthController.registration(req, res);
    expect(res.dataJS.data.attributes.attributes.userId).toBe(1);
    expect(res.dataJS.data.attributes.attributes.firstName).toBe('Artem');
    expect(res.dataJS.data.attributes.attributes.lastName).toBe('Novik');
  });
  test('Authorization', async () => {
    const stub = sinon.stub(AuthService, 'login');
    stub.returns({
      user: { id: 1 }, token: 'token',
    });
    await AuthController.login(req, res);
    expect(res.dataJS.data.attributes.attributes.token).toBe('token');
    expect(res.dataJS.data.attributes.attributes.user).toBeDefined();
  });
});
