import CollectionSerializer from '../serializers/CollectionSerializer.js';
import UserService from '../services/UserService.js';
import UserSerializer from '../serializers/UserSerializer.js';

class UserController {
  async getOne(req, res, next) {
    const user = await UserService.getOne(req.params.id, next);
    req.serializer = new UserSerializer(user);
    next();
  }

  async getAllUsers(req, res, next) {
    const collection = await UserService.getAllUsers(req.user.id, req.query, next);
    req.serializer = new CollectionSerializer(
      collection.users,
      {
        serializerType: UserSerializer,
        metaData: { countOfUsers: collection.countOfUsers },
      },
    );
    next();
  }
}
export default new UserController();
