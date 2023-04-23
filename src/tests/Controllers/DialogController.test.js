/* eslint-disable no-undef */
import { jest } from '@jest/globals';
import DialogController from '../../controllers/DialogController';
import DialogService from '../../services/DialogService';

jest.fn('DialogService');
const req = {
  body: {
    message: 'Hello',
    recipientId: 5,
  },
  user: {
    id: 1,
  },
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

describe('Dialog Controller :', () => {
  describe('sendMessage', () => {
    test('should create and return new message', async () => {
      function next() {}
      DialogService.sendMessage = () => ({
        message: 'message',
        dialogId: '1',
        senderId: '2',
      });

      await DialogController.sendMessage(req, res, next);

      expect(req.serializer).toMatchSnapshot();
    });
  });

  describe('deleteMessage', () => {
    test('should return deleted message', async () => {
      function next() {}
      DialogService.deleteMessage = () => ({
        message: 'message',
        dialogId: '1',
        senderId: '2',
      });

      await DialogController.deleteMessage(req, res, next);

      expect(req.serializer).toMatchSnapshot();
    });
  });

  describe('getAllDialogs', () => {
    test('should return dialog array', async () => {
      function next() {}
      DialogService.getAllDialogs = () => ([{
        name: 'name',
        dialogId: '1',
        id: '2',
      }]);

      await DialogController.getAllDialogs(req, res, next);

      expect(req.serializer).toMatchSnapshot();
    });
  });

  describe('getAllMessage', () => {
    test('should return message array', async () => {
      function next() {}
      DialogService.getAllMessage = () => ([{
        message: 'message',
        dialogId: '1',
        senderId: '2',
      }]);

      await DialogController.getAllMessage(req, res, next);

      expect(req.serializer).toMatchSnapshot();
    });
  });
});
