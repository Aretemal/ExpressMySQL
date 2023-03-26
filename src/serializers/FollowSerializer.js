import Serializer from './Serializer.js';

class FollowSerializer extends Serializer {
  type() {
    return 'Follow';
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

  attributes() {
    return {
      followerId: this.resource.followerId,
      followingId: this.resource.followingId,
      approvedAt: this.resource.approvedAt,
    };
  }

  id() {
    return `${this.resource.id}` || '0';
  }
}
export default FollowSerializer;
