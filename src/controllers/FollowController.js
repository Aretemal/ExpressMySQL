import FollowService from '../services/FollowService.js';
import FollowSerializer from '../serializers/FollowSerializer.js';

class FollowController {
  async follow(req, res, next) {
    const { id } = req.body;
    const follow = await FollowService.follow(req.user.id, id);
    req.serializer = new FollowSerializer(follow, req);
    next();
  }

  async approve(req, res, next) {
    const { id } = req.body;
    const follow = await FollowService.approve(req.user.id, id);
    req.serializer = new FollowSerializer(follow, req);
    next();
  }

  async unfollow(req, res, next) {
    const { id } = req.body;
    const follow = await FollowService.unfollow(req.user.id, id);
    req.serializer = new FollowSerializer(follow, req);
    next();
  }
}
export default new FollowController();
