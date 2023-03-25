import PrimitiveSerializer from './PrimitiveSerializer.js';
import Serializer from './Serializer.js';
import UserSerializer from './UserSerializer.js';

class UsersSerializer extends Serializer {
  type() {
    return 'Users';
  }

  attributes() {
    return {
      users: this.users(),
      countOfUsers: this.primitive(),
    };
  }

  users() {
    return this.resource.users.map((user) => {
      const serializer = new UserSerializer(user);
      return serializer.collectionSerializer();
    });
  }

  primitive() {
    const serializer = new PrimitiveSerializer({
      primitive: this.resource.countOfUsers,
    });
    return serializer.collectionSerializer();
  }
}
export default UsersSerializer;
