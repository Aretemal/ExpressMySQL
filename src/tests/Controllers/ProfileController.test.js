/* eslint-disable no-undef */
import { jest } from '@jest/globals';
import ProfileController from '../../controllers/ProfileController';
import ProfileService from '../../services/ProfileService';

jest.fn('ProfileService');
const req = {
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

describe('Profile Controller : ', () => {
  test('Get info authorized user', async () => {
    ProfileService.getInfoAuthorizedUser = (id) => ({
      userId: id, login: 'Artem', firstName: 'Artem', lastName: 'Novik',
    });

    await ProfileController.getInfoAuthorizedUser(req, res);

    expect(res.dataJS.data.attributes.attributes.userId).toBe(1);
    expect(res.dataJS.data.attributes.attributes.firstName).toBe('Artem');
    expect(res.dataJS.data.attributes.attributes.lastName).toBe('Novik');
  });

  test('Update status', async () => {
    ProfileService.updateStatus = (status, id) => ({
      status: `${status + id}`,
    });

    await ProfileController.updateStatus(req, res);

    expect(res.dataJS.data.attributes.attributes.status).toBe('Status1');
  });
});
