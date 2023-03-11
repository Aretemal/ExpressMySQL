/* eslint-disable no-undef */
// NODE_OPTIONS=--experimental-vm-modules npx jest src/tests/Controllers
import sinon from 'sinon';
import ProfileController from '../../controllers/ProfileController';
import ProfileService from '../../services/ProfileService';
import { req, res } from './ReqRes.js';

describe('Profile Controller : ', () => {
  test('Get info authorized user', async () => {
    const stub = sinon.stub(ProfileService, 'getInfoAuthorizedUser');
    stub.returns({
      userId: 1, login: 'Artem', firstName: 'Artem', lastName: 'Novik',
    });
    await ProfileController.getInfoAuthorizedUser(req, res);
    expect(res.dataJS.data.attributes.attributes.userId).toBe(1);
    expect(res.dataJS.data.attributes.attributes.firstName).toBe('Artem');
    expect(res.dataJS.data.attributes.attributes.lastName).toBe('Novik');
  });
  test('Update status', async () => {
    const stub = sinon.stub(ProfileService, 'updateStatus');
    stub.returns({ status: 'Status' });
    await ProfileController.updateStatus(req, res);
    expect(res.dataJS.data.attributes.attributes.status).toBe('Status');
  });
});
