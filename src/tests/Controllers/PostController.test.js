/* eslint-disable no-undef */
// NODE_OPTIONS=--experimental-vm-modules npx jest
import sinon from 'sinon';
import PostController from '../../controllers/PostController';
import PostService from '../../services/PostService';
import { req, res } from './ReqRes.js';

describe('Post Controller : ', () => {
  test('Creates a new post', async () => {
    const stub = sinon.stub(PostService, 'create');
    stub.returns('Hello');
    await PostController.create(req, res);
    expect(res.dataJS.data.attributes.attributes).toBe('Hello');
  });
  test('Returns all posts', async () => {
    const stub = sinon.stub(PostService, 'getAll');
    stub.returns([{ id: 1 }, { id: 2 }]);
    await PostController.getAll(req, res);
    expect(res.dataJS.data.attributes.attributes[0].id).toBe(1);
    expect(res.dataJS.data.attributes.attributes[1].id).toBe(2);
  });
  test('Returns one posts', async () => {
    const stub = sinon.stub(PostService, 'getOne');
    stub.returns({ id: 1, content: 'Hello' });
    await PostController.getOne(req, res);
    expect(res.dataJS.data.attributes.attributes.id).toBe(1);
    expect(res.dataJS.data.attributes.attributes.content).toBe('Hello');
  });
});
