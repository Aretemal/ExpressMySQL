import UserService from '../services/UserService.js';
import fullUrlCreator from '../utils/fullUrlCreator.js';
import UserSerializers from '../utils/JsonSerializer/UserSerializers.js';

class UserController {
  async getOne(req, res) {
    const user = await UserService.getOne(req.params.id);
    res.json(UserSerializers.userSerialize(user, fullUrlCreator(req), 'ObjectUser', req.user.id));
  }

  async getAllUsers(req, res) {
    const data = await UserService.getAllUsers(req.user.id, req.query);
    res.json(UserSerializers.userSerialize(data, fullUrlCreator(req), 'Array Users', req.user.id));
  }

  async getStatus(req, res) {
    const status = await UserService.getStatus(req.params.id);
    res.json(UserSerializers.userSerialize(status, fullUrlCreator(req), 'Status', req.user.id));
  }
}
export default new UserController();
