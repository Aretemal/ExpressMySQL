import PostSerializer from './PostSerializer.js';
import Serializer from './Serializer.js';

class PostsSerializer extends Serializer {
  type() {
    return 'Posts';
  }

  id() {
    return '0';
  }

  attributes() {
    return {
      posts: this.posts(),
    };
  }

  serialize() {
    return {
      data: {
        type: this.type(),
        id: this.id(),
        attributes: this.attributes(),
      },
      links: this.link(),
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
