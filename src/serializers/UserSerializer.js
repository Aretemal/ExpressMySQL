import Serializer from './Serializer.js';

class UserSerializer extends Serializer {
  type() {
    return 'User';
  }

  id() {
    return this.resource.attributes.userId;
  }

  attributes() {
    return {
      fullName: this.resource.attributes.fullName,
      lastName: this.resource.attributes.lastName,
      login: this.resource.attributes.login,
      status: this.resource.attributes.status,
      email: this.resource.attributes.email,
      ava: this.resource.attributes.ava,
    };
  }
}
export default UserSerializer;
