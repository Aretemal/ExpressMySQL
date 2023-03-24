import PostSerializers from '../../serializers/PostSerializers.js';

describe('PostSerializer :', () => {
  describe('create :', () => {
    test('should return post', () => {
      const links = 'http://localhost:5000/api/profile/posts';
      const post = {
        authorId: 2,
        content: 'Hello',
      };

      const data = PostSerializers.postSerialize(post, links, 'Post', 1);

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

      const data = PostSerializers.postSerialize(posts, links, 'Array Posts', 1);

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

      const data = PostSerializers.postSerialize(post, links, 'Post', 1);

      expect(data).toMatchSnapshot();
    });
  });
});
