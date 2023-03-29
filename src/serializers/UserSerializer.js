import fullUrlCreator from '../utils/fullUrlCreator.js';
import Serializer from './Serializer.js';

class UserSerializer extends Serializer {
  type() {
    return 'User';
  }

  id() {
    return `${this.resource.userId}`;
  }

  attributes() {
    return {
      ...this.resource,
    };
  }

  links() {
    return this.request ? {
      self: fullUrlCreator(this.request),
    } : { self: `${process.env.API_URL}/user/${this.resource.userId}` };
  }
}
export default UserSerializer;
