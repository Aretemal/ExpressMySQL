import Serializers from './Serializers.js';

class FollowSerializers extends Serializers {
  followSerialize(data, links, type, id) {
    return this.serialize(data, id || 0, `${type} connection`, links);
  }
}
export default new FollowSerializers();
