import PostSerializer from '../../serializers/PostSerializer.js';
import PostsSerializer from '../../serializers/PostsSerializer.js';

describe('PostSerializer :', () => {
  describe('create :', () => {
    test('should return post', () => {
      const post = {
        id: 3,
        authorId: 2,
        content: 'Hello',
      };

      const serializer = new PostSerializer(post);
      const data = serializer.serialize();

      expect(data).toMatchSnapshot();
    });
  });

  describe('getAll :', () => {
    test('should return array posts', () => {
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
      const serializer = new PostsSerializer(posts);
      const data = serializer.serialize();

      expect(data).toMatchSnapshot();
    });
  });

  describe('getOne :', () => {
    test('should return post', () => {
      const post = {
        id: 1,
        authorId: 2,
        content: 'Hello',
      };
      const serializer = new PostSerializer(post);
      const data = serializer.serialize();

      expect(data).toMatchSnapshot();
    });
  });
});
