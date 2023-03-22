import Serializers from './Serializers.js';

class PostSerializers extends Serializers {
  postSerialize(data, links, type, id) {
    return this.serialize(data, id, type, links);
  }
}
export default new PostSerializers();
