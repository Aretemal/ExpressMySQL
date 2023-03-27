import fullUrlCreator from '../utils/fullUrlCreator.js';
import Serializer from './Serializer.js';

class UserSerializer extends Serializer {
  type() {
    return 'User';
  }

  attributes() {
    return {
      firstName: this.resource.firstName,
      lastName: this.resource.lastName,
      login: this.resource.login,
      status: this.resource.status,
      email: this.resource.email,
      ava: this.resource.ava,
    };
  }

  links() {
    return this.request ? {
      self: fullUrlCreator(this.request),
    } : { self: `${process.env.API_URL}/user/${this.resource.userId}` };
  }
}
export default UserSerializer;
