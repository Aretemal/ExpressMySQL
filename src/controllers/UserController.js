import UserService from '../services/UserService.js';
import fullUrlCreator from '../utils/fullUrlCreator.js';
import UserSerializers from '../serializers/UserSerializers.js';

class UserController {
  async getOne(req, res, next) {
    const user = await UserService.getOne(req.params.id);
    const serializer = new UserSerializers({
      attributes: user, id: req.user.id, type: 'User', link: fullUrlCreator(req),
    });
    req.serializer = serializer;
    next();
  }

  async getAllUsers(req, res, next) {
    const data = await UserService.getAllUsers(req.user.id, req.query);
    const serializer = new UserSerializers({
      attributes: data, id: req.user.id, type: 'Users', link: fullUrlCreator(req),
    });
    req.serializer = serializer;
    next();
  }
}
export default new UserController();
