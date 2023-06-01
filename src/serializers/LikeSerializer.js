import Serializer from './Serializer.js';

class LikeSerializer extends Serializer {
  type() {
    return 'Like';
  }

  attributes() {
    return {
      id: this.resource.id,
      senderLikeId: this.resource.senderLikeId,
      postLikeId: this.resource.postLikeId,
      createdAt: this.resource.createdAt,
    };
  }

  links() {
    return { self: `${process.env.API_URL}/posts/like/${this.resource.id}` };
  }
}
export default LikeSerializer;
