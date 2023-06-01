import Serializer from './Serializer.js';

class CommentSerializer extends Serializer {
  type() {
    return 'Comment';
  }

  attributes() {
    return {
      message: this.resource.message,
      senderCommentId: this.resource.senderCommentId,
      postCommentId: this.resource.postCommentId,
      createdAt: this.resource.createdAt,
    };
  }

  links() {
    return { self: `${process.env.API_URL}/comment/${this.resource.id}` };
  }
}
export default CommentSerializer;
