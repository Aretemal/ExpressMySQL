import UserService from '../services/UserService.js';

class UserController {
  async create(req, res) {
    const post = await UserService.create(req.body);
    res.json(post);
  }

  async getStatus(req, res) {
    const status = UserService.getStatus(req.params.id);
    res.json(status);
  }

  async getOne(req, res) {
    const user = await UserService.getOne(req.params.id);
    return res.json(user);
  }
}
export default new UserController();
