import ProfileService from '../services/ProfileService.js';
import fullUrlCreator from '../utils/fullUrlCreator.js';
import UserSerializer from '../serializers/UserSerializer.js';

class ProfileController {
  async getInfoAuthorizedUser(req, res, next) {
    const user = await ProfileService.getInfoAuthorizedUser(req.user.id);
    const serializer = new UserSerializer({
      attributes: user, link: fullUrlCreator(req),
    });
    req.serializer = serializer;
    next();
  }

  async updateStatus(req, res, next) {
    const user = await ProfileService.updateStatus(req.body.status, req.user.id);
    const serializer = new UserSerializer({
      attributes: user, link: fullUrlCreator(req),
    });
    req.serializer = serializer;
    next();
  }

  async getStatus(req, res, next) {
    const user = await ProfileService.getStatus(req.params.id);
    const serializer = new UserSerializer({
      attributes: user, link: fullUrlCreator(req),
    });
    req.serializer = serializer;
    next();
  }
}
export default new ProfileController();
