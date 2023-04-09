import Serializer from './Serializer.js';

class UserSerializer extends Serializer {
  type() {
    return 'User';
  }

  attributes() {
    return {
      firstName: this.resource.firstName,
      lastName: this.resource.lastName,
      ava: this.resource.ava,
      login: this.resource.login,
      status: this.resource.status,
      email: this.resource.email,
    };
  }

  links() {
    return { self: `${process.env.API_URL}/user/${this.resource.id}` };
  }
}
export default UserSerializer;
