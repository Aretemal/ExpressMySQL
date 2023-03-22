import PostSerializer from '../../utils/JsonSerializer/PostSerializer.js';

describe('PostSerializer :', () => {
  describe('create :', () => {
    test('should return post', () => {
      const links = 'http://localhost:5000/api/profile/posts';
      const post = {
        authorId: 2,
        content: 'Hello',
      };

      const data = PostSerializer.create(post, links, 1);

      expect(data.data.attributes.authorId).toBe(2);
      expect(data.data.attributes.content).toBe('Hello');
      expect(data.data.id).toBe(1);
      expect(data.data.type).toBe('Post');
      expect(data.links.self).toBe('http://localhost:5000/api/profile/posts');
    });
  });

  describe('getAll :', () => {
    test('should return array posts', () => {
      const links = 'http://localhost:5000/api/profile/posts';
      const posts = [{
        authorId: 2,
        content: 'Hello',
      },
      {
        authorId: 1,
        content: 'World',
      }];

      const data = PostSerializer.getAll(posts, links, 1);

      expect(data.data.attributes[1].authorId).toBe(1);
      expect(data.data.attributes[1].content).toBe('World');
      expect(data.data.id).toBe(1);
      expect(data.data.type).toBe('Array Posts');
      expect(data.links.self).toBe('http://localhost:5000/api/profile/posts');
    });
  });

  describe('getOne :', () => {
    test('should return post', () => {
      const links = 'http://localhost:5000/api/profile/posts/2';
      const post = {
        authorId: 2,
        content: 'Hello',
      };

      const data = PostSerializer.getOne(post, links, 1);

      expect(data.data.attributes.authorId).toBe(2);
      expect(data.data.attributes.content).toBe('Hello');
      expect(data.data.id).toBe(1);
      expect(data.data.type).toBe('Post');
      expect(data.links.self).toBe('http://localhost:5000/api/profile/posts/2');
    });
  });
});
