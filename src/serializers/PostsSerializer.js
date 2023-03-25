import PostSerializer from './PostSerializer.js';
import Serializer from './Serializer.js';

class PostsSerializer extends Serializer {
  type() {
    return 'Posts';
  }

  id() {
    return 0;
  }

  attributes() {
    return {
      posts: this.posts(),
    };
  }

  posts() {
    return this.resource.map((post) => {
      const serializer = new PostSerializer(post);
      return serializer.collectionSerializer();
    });
  }
}
export default PostsSerializer;
