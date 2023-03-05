import UserService from '../services/UserService.js';
import { ResponseObjectJSON } from '../utils/createrObjectResponse.js';

class UserController {
  async getOne(req, res) {
    const user = await UserService.getOne(req.params.id);
    res.json(
      ResponseObjectJSON.render({
        type: 'user', id: user.userId, attributes: user, relationships: req.body,
      }, { links: { self: req.originalUrl } }),
    );
  }

  async getStatus(req, res) {
    const status = await UserService.getStatus(req.params.id);
    res.json(
      ResponseObjectJSON.render({
        type: 'user', attributes: status, relationships: req.body,
      }, { links: { self: req.originalUrl } }),
    );
  }
}
export default new UserController();
