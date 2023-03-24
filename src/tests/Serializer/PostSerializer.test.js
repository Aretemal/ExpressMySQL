import PostSerializer from '../../serializers/PostSerializer.js';
import PostsSerializer from '../../serializers/PostsSerializer.js';

describe('PostSerializer :', () => {
  describe('create :', () => {
    test('should return post', () => {
      const links = 'http://localhost:5000/api/profile/posts';
      const post = {
        id: 3,
        authorId: 2,
        content: 'Hello',
      };

      const serializer = new PostSerializer({
        attributes: post, link: links,
      });
      const data = serializer.serialize();

      expect(data).toMatchSnapshot();
    });
  });

  describe('getAll :', () => {
    test('should return array posts', () => {
      const links = 'http://localhost:5000/api/profile/posts';
      const posts = [{
        id: 2,
        authorId: 2,
        content: 'Hello',
      },
      {
        id: 2,
        authorId: 1,
        content: 'World',
      }];
      const serializer = new PostsSerializer({
        attributes: posts, link: links,
      }, PostSerializer);
      const data = serializer.serialize();

      expect(data).toMatchSnapshot();
    });
  });

  describe('getOne :', () => {
    test('should return post', () => {
      const links = 'http://localhost:5000/api/profile/posts/2';
      const post = {
        id: 1,
        authorId: 2,
        content: 'Hello',
      };
      const serializer = new PostSerializer({
        attributes: post, link: links,
      });
      const data = serializer.serialize();

      expect(data).toMatchSnapshot();
    });
  });
});
