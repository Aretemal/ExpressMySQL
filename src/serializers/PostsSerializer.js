import PostSerializer from './PostSerializer.js';
import Serializer from './Serializer.js';

class PostsSerializer extends Serializer {
  serialize() {
    return {
      data: this.posts(),
      links: this.links(),
    };
  }

  posts() {
    return this.resource.map((post) => {
      const serializer = new PostSerializer(post);
      return serializer.serialize().data;
    });
  }
}
export default PostsSerializer;
