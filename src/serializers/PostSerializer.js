import Serializer from './Serializer.js';

class PostSerializer extends Serializer {
  type() {
    return 'Post';
  }

  id() {
    return this.resource.attributes.id;
  }

  attributes() {
    return {
      authorId: this.resource.attributes.authorId,
      content: this.resource.attributes.content,
    };
  }
}
export default PostSerializer;
