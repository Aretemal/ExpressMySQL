import UserService from '../services/UserService.js';

class UserController {
  async getOne(req, res) {
    const user = await UserService.getOne(req.params.id);
    return res.json(user);
  }

  async getStatus(req, res) {
    const status = await UserService.getStatus(req.params.id);
    res.json(status);
  }
}
export default new UserController();
