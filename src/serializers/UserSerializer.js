import Serializer from './Serializer.js';

class UserSerializer extends Serializer {
  type() {
    return 'User';
  }

  id() {
    const data = this.resource.id;
    delete this.resource.id;
    return `${data}`;
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
