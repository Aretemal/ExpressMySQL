import Serializer from './Serializer.js';

class AuthSerializer extends Serializer {
  registration(data, links) {
    return this.serialize(data, data.id, 'ObjectUser', links);
  }

  login(data, links) {
    const jsonObj = this.serialize(data.user, data.user.id, 'Token', links);
    jsonObj.data.token = data.token;
    return jsonObj;
  }
}
export default new AuthSerializer();
