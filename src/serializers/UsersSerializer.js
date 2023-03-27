import fullUrlCreator from '../utils/fullUrlCreator.js';
import Serializer from './Serializer.js';
import UserSerializer from './UserSerializer.js';

class UsersSerializer extends Serializer {
  meta() {
    return {
      countOfUsers: this.resource.countOfUsers,
    };
  }

  serialize() {
    return {
      meta: this.meta(),
      data: this.users(),
      links: this.links(),
    };
  }

  users() {
    return this.resource.users.map((user) => {
      const serializer = new UserSerializer(user);
      return serializer.serialize().data;
    });
  }

  links() {
    return this.request ? {
      self: fullUrlCreator(this.request),
    } : { self: `${process.env.API_URL}/users` };
  }
}
export default UsersSerializer;
