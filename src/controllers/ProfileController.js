import ProfileService from '../services/ProfileService.js';
import fullUrlCreator from '../utils/fullUrlCreator.js';
import ProfileSerializers from '../serializers/ProfileSerializers.js';

class ProfileController {
  async getInfoAuthorizedUser(req, res, next) {
    const data = await ProfileService.getInfoAuthorizedUser(req.user.id);
    const serializer = new ProfileSerializers({
      attributes: data, id: req.user.id, type: 'User info', link: fullUrlCreator(req),
    });
    req.serializer = serializer;
    next();
  }

  async updateStatus(req, res, next) {
    const data = await ProfileService.updateStatus(req.body.status, req.user.id);
    const serializer = new ProfileSerializers({
      attributes: data, id: req.user.id, type: 'New status', link: fullUrlCreator(req),
    });
    req.serializer = serializer;
    next();
  }

  async getStatus(req, res, next) {
    const status = await ProfileService.getStatus(req.params.id);
    const serializer = new ProfileSerializers({
      attributes: status, id: req.user.id, type: 'Status', link: fullUrlCreator(req),
    });
    req.serializer = serializer;
    next();
  }
}
export default new ProfileController();
