import ProfileService from '../services/ProfileService.js';
import fullUrlCreator from '../utils/fullUrlCreator.js';
import ProfileSerializer from '../utils/JsonSerializer/ProfileSerializer.js';

class ProfileController {
  async getInfoAuthorizedUser(req, res) {
    const data = await ProfileService.getInfoAuthorizedUser(req.user.id);
    res.json(ProfileSerializer.getInfoAuthorizedUser(data, fullUrlCreator(req), req.user.id));
  }

  async updateStatus(req, res) {
    const data = await ProfileService.updateStatus(req.body.status, req.user.id);
    res.json(ProfileSerializer.updateStatus(data, fullUrlCreator(req), req.user.id));
  }
}
export default new ProfileController();
