import ProfileService from '../services/ProfileService.js';

class ProfileController {
  async getInfoAuthorizedUser(req, res) {
    const user = await ProfileService.getInfoAuthorizedUser(req.user.id);
    return res.json(user);
  }

  async updateStatus(req, res) {
    const response = await ProfileService.updateStatus(req.body.status, req.user.id);
    return res.json(response);
  }
}
export default new ProfileController();
