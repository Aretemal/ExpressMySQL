import Serializers from './Serializers.js';

class UserSerializers extends Serializers {
  userSerialize(data, links, type, id) {
    return this.serialize(data, id, type, links);
  }
}
export default new UserSerializers();
