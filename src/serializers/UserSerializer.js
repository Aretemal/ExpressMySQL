import Serializer from './Serializer.js';

class UserSerializer extends Serializer {
  type() {
    return 'User';
  }

  attributes() {
    const data = {
      firstName: this.resource.firstName,
      lastName: this.resource.lastName,
      ava: this.resource.ava,
      login: this.resource.login,
      status: this.resource.status,
      email: this.resource.email,
    };
    if (this.resource.followed) data.followed = this.resource.followed;
    if (this.resource.hasConnection) data.hasConnection = this.resource.hasConnection;
    return data;
  }

  links() {
    return { self: `${process.env.API_URL}/user/${this.resource.id}` };
  }
}
export default UserSerializer;
