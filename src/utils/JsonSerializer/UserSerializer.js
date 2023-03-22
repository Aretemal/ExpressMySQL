import Serializer from './Serializer.js';

class UserSerializer extends Serializer {
  getOne(data, links) {
    return this.serialize(data, data.id, 'ObjectUser', links);
  }

  getAllUsers(data, links) {
    return this.serialize(data, data.userAuth.id, 'Array Users', links);
  }

  getStatus(data, links) {
    return this.serialize(data, data.id, 'Status', links);
  }
}
export default new UserSerializer();
