import Serializer from './Serializer.js';

class UserSerializer extends Serializer {
  type() {
    return 'User';
  }

  id() {
    return this.resource.userId;
  }

  collectionSerializer() {
    return {
      type: this.type(),
      id: this.id(),
      attributes: this.attributes(),
    };
  }

  attributes() {
    return {
      fullName: this.resource.fullName,
      lastName: this.resource.lastName,
      login: this.resource.login,
      status: this.resource.status,
      email: this.resource.email,
      ava: this.resource.ava,
    };
  }
}
export default UserSerializer;
