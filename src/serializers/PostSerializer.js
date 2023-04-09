import Serializer from './Serializer.js';

class PostSerializer extends Serializer {
  type() {
    return 'Post';
  }

  attributes() {
    return {
      authorId: this.resource.authorId,
      content: this.resource.content,
    };
  }

  links() {
    return { self: `${process.env.API_URL}/post/${this.resource.id}` };
  }
}
export default PostSerializer;
