import Serializer from './Serializer.js';

class AuthSerializer extends Serializer {
  registration(data, links) {
    return this.serializer(data, data.id, 'ObjectUser', links);
  }

  login(data, links) {
    const jsonObj = this.serializer(data.user, data.user.id, 'Token', links);
    jsonObj.data.token = data.token;
    return jsonObj;
  }
}
export default new AuthSerializer();
