import Serializer from './Serializer.js';

class ProfileSerializer extends Serializer {
  getInfoAuthorizedUser(data, links, id) {
    return this.serialize(data, id, 'ObjectUser', links);
  }

  updateStatus(data, links, id) {
    return this.serialize(data, id, 'NewStatus', links);
  }
}
export default new ProfileSerializer();
