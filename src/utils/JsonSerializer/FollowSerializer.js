import Serializer from './Serializer.js';

class FollowSerializer extends Serializer {
  follow(data, links) {
    return this.serializer(data, data.id, 'Follow connection', links);
  }

  approve(data, links) {
    return this.serializer(data, data.id, 'Approve connection', links);
  }

  unfollow(data, links) {
    return this.serializer(data, data.id || 0, 'Unfollow connection', links);
  }
}
export default new FollowSerializer();
