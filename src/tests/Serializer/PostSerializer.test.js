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

      expect(data).toMatchSnapshot();
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

      expect(data).toMatchSnapshot();
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

      expect(data).toMatchSnapshot();
    });
  });
});
