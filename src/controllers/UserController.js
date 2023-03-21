import UserService from '../services/UserService.js';
import fullUrlCreator from '../utils/fullUrlCreator.js';
import UserJsonCreator from '../utils/JsonPresenters/UserJsonCreator.js';

class UserController {
  async getOne(req, res) {
    const user = await UserService.getOne(req.params.id);
    res.json(UserJsonCreator.getOne(user, fullUrlCreator(req)));
  }

  async getAllUsers(req, res) {
    const data = await UserService.getAllUsers(req.user.id, req.query);
    res.json(UserJsonCreator.getAllUsers(data, fullUrlCreator(req)));
  }

  async getStatus(req, res) {
    const status = await UserService.getStatus(req.params.id);
    res.json(UserJsonCreator.getStatus(status, fullUrlCreator(req)));
  }
}
export default new UserController();
