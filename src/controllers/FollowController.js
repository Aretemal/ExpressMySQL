import FollowService from '../services/FollowService.js';
import fullUrlCreator from '../utils/fullUrlCreator.js';
import FollowSerializers from '../serializers/FollowSerializers.js';

class FollowController {
  async follow(req, res, next) {
    const { id } = req.body;
    const data = await FollowService.follow(req.user.id, id);
    const serializer = new FollowSerializers({
      data, id: req.user.id, type: 'Follow', link: fullUrlCreator(req),
    });
    req.serializer = serializer;
    next();
  }

  async approve(req, res, next) {
    const { id } = req.body;
    const data = await FollowService.approve(req.user.id, id);
    const serializer = new FollowSerializers({
      attributes: data, id: req.user.id, type: 'Approve', link: fullUrlCreator(req),
    });
    req.serializer = serializer;
    next();
  }

  async unfollow(req, res, next) {
    const { id } = req.body;
    const data = await FollowService.unfollow(req.user.id, id);
    const serializer = new FollowSerializers({
      attributes: data, id: req.user.id, type: 'Unfollow', link: fullUrlCreator(req),
    });
    req.serializer = serializer;
    next();
  }
}
export default new FollowController();
