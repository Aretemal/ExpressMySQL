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
      links: this.link(),
    };
  }

  users() {
    return this.resource.users.map((user) => {
      const serializer = new UserSerializer(user);
      return {
        type: serializer.type(),
        id: serializer.id(),
        attributes: serializer.attributes(),
      };
    });
  }
}
export default UsersSerializer;
