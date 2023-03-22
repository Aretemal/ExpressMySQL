import UserService from '../services/UserService.js';
import fullUrlCreator from '../utils/fullUrlCreator.js';
import UserSerializer from '../utils/JsonSerializer/UserSerializer.js';

class UserController {
  async getOne(req, res) {
    const user = await UserService.getOne(req.params.id);
    res.json(UserSerializer.getOne(user, fullUrlCreator(req)));
  }

  async getAllUsers(req, res) {
    const data = await UserService.getAllUsers(req.user.id, req.query);
    res.json(UserSerializer.getAllUsers(data, fullUrlCreator(req)));
  }

  async getStatus(req, res) {
    const status = await UserService.getStatus(req.params.id);
    res.json(UserSerializer.getStatus(status, fullUrlCreator(req)));
  }
}
export default new UserController();
