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
}
export default FollowSerializer;
