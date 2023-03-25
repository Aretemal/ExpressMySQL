import ProfileService from '../services/ProfileService.js';
import UserSerializer from '../serializers/UserSerializer.js';

class ProfileController {
  async getInfoAuthorizedUser(req, res, next) {
    const user = await ProfileService.getInfoAuthorizedUser(req.user.id);
    req.serializer = new UserSerializer(user, req);
    next();
  }

  async updateStatus(req, res, next) {
    const user = await ProfileService.updateStatus(req.body.status, req.user.id);
    req.serializer = new UserSerializer(user, req);
    next();
  }

  async getStatus(req, res, next) {
    const user = await ProfileService.getStatus(req.params.id);
    req.serializer = new UserSerializer(user, req);
    next();
  }
}
export default new ProfileController();
