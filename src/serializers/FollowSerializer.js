import Serializer from './Serializer.js';

class FollowSerializer extends Serializer {
  type() {
    return 'Follow';
  }

  attributes() {
    return {
      followerId: this.resource.followerId,
      followingId: this.resource.followingId,
      approvedAt: this.resource.approvedAt,
    };
  }

  id() {
    return this.resource.id || 0;
  }
}
export default FollowSerializer;
