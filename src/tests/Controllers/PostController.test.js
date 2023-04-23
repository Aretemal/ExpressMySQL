/* eslint-disable no-undef */
import { jest } from '@jest/globals';
import PostController from '../../controllers/PostController';
import PostService from '../../services/PostService';

jest.fn('PostService');
const req = {
  body: {
    newMessageText: 'Hello',
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

describe('Post Controller :', () => {
  describe('Create', () => {
    test('should creates a new post', async () => {
      function next() {}
      PostService.create = ({ newMessageText }, id) => ({
        authorId: id,
        content: newMessageText,
      });

      await PostController.create(req, res, next);

      expect(req.serializer).toMatchSnapshot();
    });
  });

  describe('getAll', () => {
    test('should returns all posts', async () => {
      function next() {}
      PostService.getAll = () => ([
        { id: 1 }, { id: 2 },
      ]);

      await PostController.getAll(req, res, next);

      expect(req.serializer).toMatchSnapshot();
    });
  });

  describe('getOne', () => {
    test('should returns one posts', async () => {
      function next() {}
      PostService.getOne = (id) => ({
        id, content: 'Hello',
      });

      await PostController.getOne(req, res, next);

      expect(req.serializer).toMatchSnapshot();
    });
  });
});
