import Serializer from './Serializer.js';

class PostSerializer extends Serializer {
  type() {
    return 'Post';
  }

  id() {
    return this.resource.id;
  }

  collectionSerializer() {
    return {
      type: this.type(),
      id: this.id(),
      attributes: this.attributes(),
    };
  }

  attributes() {
    return {
      authorId: this.resource.authorId,
      content: this.resource.content,
    };
  }
}
export default PostSerializer;
