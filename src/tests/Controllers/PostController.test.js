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
  test('Creates a new post', async () => {
    PostService.create = ({ newMessageText }, id) => ({
      authorId: id, content: newMessageText,
    });

    await PostController.create(req, res);

    expect(res.dataJS.data.attributes.attributes.content).toBe('Hello');
    expect(res.dataJS.data.attributes.attributes.authorId).toBe(1);
  });

  test('Returns all posts', async () => {
    PostService.getAll = () => ([
      { id: 1 }, { id: 2 },
    ]);

    await PostController.getAll(req, res);

    expect(res.dataJS.data.attributes.attributes[0].id).toBe(1);
    expect(res.dataJS.data.attributes.attributes[1].id).toBe(2);
  });
  test('Returns one posts', async () => {
    PostService.getOne = (id) => ({
      id, content: 'Hello',
    });

    await PostController.getOne(req, res);

    expect(res.dataJS.data.attributes.attributes.id).toBe(1);
    expect(res.dataJS.data.attributes.attributes.content).toBe('Hello');
  });
});
