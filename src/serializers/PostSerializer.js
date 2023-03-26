import Serializer from './Serializer.js';

class PostSerializer extends Serializer {
  type() {
    return 'Post';
  }

  id() {
    return `${this.resource.id}`;
  }

  attributes() {
    return {
      authorId: this.resource.authorId,
      content: this.resource.content,
    };
  }
}
export default PostSerializer;
