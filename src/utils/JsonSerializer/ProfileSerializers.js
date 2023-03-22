import Serializers from './Serializers.js';

class ProfileSerializers extends Serializers {
  profileSerialize(data, links, id) {
    return this.serialize(data, id, 'ObjectUser', links);
  }
}
export default new ProfileSerializers();
