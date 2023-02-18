import UserService from '../services/UserService.js';

class UserController {
  async create(req, res) {
    try {
      const post = await UserService.create(req.body);
      res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getStatus(req, res) {
    try {
      const status = UserService.getStatus(req.params.id);
      res.json(status);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res) {
    try {
      const user = await UserService.getOne(req.params.id);
      return res.json(user);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}
export default new UserController();
