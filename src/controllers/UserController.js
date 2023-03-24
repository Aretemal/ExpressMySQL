import UsersSerializer from '../serializers/UsersSerializer.js';
import UserService from '../services/UserService.js';
import fullUrlCreator from '../utils/fullUrlCreator.js';
import UserSerializer from '../serializers/UserSerializer.js';

class UserController {
  async getOne(req, res, next) {
    const user = await UserService.getOne(req.params.id);
    const serializer = new UserSerializer({
      attributes: user, link: fullUrlCreator(req),
    });
    req.serializer = serializer;
    next();
  }

  async getAllUsers(req, res, next) {
    const users = await UserService.getAllUsers(req.user.id, req.query);
    const serializer = new UsersSerializer({
      attributes: users, link: fullUrlCreator(req),
    }, UserSerializer);
    req.serializer = serializer;
    next();
  }
}
export default new UserController();
