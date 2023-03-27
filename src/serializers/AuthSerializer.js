import Serializer from './Serializer.js';

class AuthSerializer extends Serializer {
  type() {
    return 'Token';
  }

  attributes() {
    return {
      token: this.resource.token,
    };
  }
}
export default AuthSerializer;
