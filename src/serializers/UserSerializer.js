import fullUrlCreator from '../utils/fullUrlCreator.js';
import Serializer from './Serializer.js';

class UserSerializer extends Serializer {
  type() {
    return 'User';
  }

  attributes() {
    return {
      ava: this.resource.ava,
      email: this.resource.email,
      firstName: this.resource.firstName,
      lastName: this.resource.lastName,
      login: this.resource.login,
      status: this.resource.status,
    };
  }

  attributes() {
    return {
      ...this.resource,
    };
  }

  links() {
    return { self: `${process.env.API_URL}/user/${this.resource.id}` };
  }
}
export default UserSerializer;
