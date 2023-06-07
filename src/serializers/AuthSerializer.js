import Serializer from './Serializer.js';

class AuthSerializer extends Serializer {
  type() {
    return 'Token';
  }

  attributes() {
    return {
      token: this.resource.token,
      login: this.resource.login,
    };
  }

  links() {
    return { self: `${process.env.API_URL}/login` };
  }
}
export default AuthSerializer;
