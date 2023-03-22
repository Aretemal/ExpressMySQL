import ProfileService from '../services/ProfileService.js';
import fullUrlCreator from '../utils/fullUrlCreator.js';
import ProfileSerializers from '../utils/JsonSerializer/ProfileSerializers.js';

class ProfileController {
  async getInfoAuthorizedUser(req, res) {
    const data = await ProfileService.getInfoAuthorizedUser(req.user.id);
    res.json(ProfileSerializers.profileSerialize(data, fullUrlCreator(req), 'ObjectUser', req.user.id));
  }

  async updateStatus(req, res) {
    const data = await ProfileService.updateStatus(req.body.status, req.user.id);
    res.json(ProfileSerializers.profileSerialize(data, fullUrlCreator(req), 'NewStatus', req.user.id));
  }
}
export default new ProfileController();
