import ProfileService from '../services/ProfileService.js';
import { ResponseObjectJSON } from '../utils/createrObjectResponse.js';

class ProfileController {
  async getInfoAuthorizedUser(req, res) {
    const data = await ProfileService.getInfoAuthorizedUser(req.user.id);
    res.json(
      ResponseObjectJSON.render({
        type: 'user', id: data.userId, attributes: data, relationships: req.body,
      }, { links: { self: req.originalUrl } }),
    );
  }

  async updateStatus(req, res) {
    const data = await ProfileService.updateStatus(req.body.status, req.user.id);
    res.json(
      ResponseObjectJSON.render({
        type: 'status', attributes: data, relationships: req.body,
      }, { links: { self: req.originalUrl } }),
    );
  }
}
export default new ProfileController();
