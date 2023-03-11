/* eslint-disable no-undef */
// NODE_OPTIONS=--experimental-vm-modules npx jest
import PostService from '../../services/PostService.js';
import Post from '../../models/post.js';

describe('Post Service : ', () => {
  test('Creates a new post', async () => {
    const data = await PostService.create({ newMessageText: 'Hello' }, 1);
    expect(data).toBeDefined();
    expect(data.content).toBe('Hello');
    expect(data.authorId).toBe(1);
  });
  test('Returns all posts', async () => {
    const data = await PostService.getAll();
    expect(data).toBeDefined();
    expect(data).toBeInstanceOf(Array);
  });
  test('Returns specific posts', async () => {
    const data = await PostService.getOne(1);
    expect(data).toBeDefined();
    expect(data).toBeInstanceOf(Post);
  });
});
