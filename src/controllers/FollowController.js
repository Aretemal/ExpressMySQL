import { validationResult } from 'express-validator';
import FollowService from '../services/FollowService.js';
import FollowSerializer from '../serializers/FollowSerializer.js';

class FollowController {
  async follow(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { id } = req.body;
    const follow = await FollowService.follow(req.user.id, id);
    req.serializer = new FollowSerializer(follow);
    next();
  }

  async approve(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { id } = req.body;
    const follow = await FollowService.approve(req.user.id, id);
    req.serializer = new FollowSerializer(follow);
    next();
  }

  async unfollow(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { id } = req.body;
    const follow = await FollowService.unfollow(req.user.id, id);
    req.serializer = new FollowSerializer(follow);
    next();
  }
}
export default new FollowController();
