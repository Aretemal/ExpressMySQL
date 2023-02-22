import ProfileService from '../services/ProfileService.js';

class ProfileController {
  async getInfoAuthorizedUser(req, res) {
    const user = await ProfileService.getInfoAuthorizedUser(req.user.id);
    return res.json(user);
  }

  async updateStatus(req, res) {
    await ProfileService.updateStatus(req.body.status, req.user.id);
    return res.json({ resultCode: 0 });
  }
}
export default new ProfileController();
