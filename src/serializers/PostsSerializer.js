import PostSerializer from './PostSerializer.js';
import Serializer from './Serializer.js';

class PostsSerializer extends Serializer {
  serialize() {
    return {
      data: this.posts(),
      links: this.link(),
    };
  }

  posts() {
    return this.resource.map((post) => {
      const serializer = new PostSerializer(post);
      return {
        type: serializer.type(),
        id: serializer.id(),
        attributes: serializer.attributes(),
      };
    });
  }
}
export default PostsSerializer;
