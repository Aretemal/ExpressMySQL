import Serializer from './Serializer.js';

class FollowSerializer extends Serializer {
  type() {
    return 'Follow';
  }

  attributes() {
    return {
      followerId: this.resource.attributes.followerId,
      followingId: this.resource.attributes.followingId,
      approvedAt: this.resource.attributes.approvedAt,
    };
  }

  id() {
    return this.resource.attributes.id || 0;
  }
}
export default FollowSerializer;
