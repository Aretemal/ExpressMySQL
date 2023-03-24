import PrimitiveSerializer from './PrimitiveSerializer.js';
import Serializer from './Serializer.js';

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
    return this.resource.attributes.users.map((user) => {
      const serializer = new this.options({ attributes: user, link: `http://localhost:5000/api/user/${user.userId}` });
      return serializer.serialize();
    });
  }

  primitive() {
    const serializer = new PrimitiveSerializer({
      primitive: this.resource.attributes.countOfUsers,
    });
    return serializer.serialize();
  }
}
export default UsersSerializer;
