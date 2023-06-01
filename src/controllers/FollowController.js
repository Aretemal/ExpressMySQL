import { validationResult } from 'express-validator';
import CollectionSerializer from '../serializers/CollectionSerializer.js';
import UserSerializer from '../serializers/UserSerializer.js';
import FollowService from '../services/FollowService.js';
import FollowSerializer from '../serializers/FollowSerializer.js';

class FollowController {
  async follow(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      next({ errorsArray: errors.array() });
      return;
    }
    const { id } = req.body;
    const follow = await FollowService.follow(req.user.id, id, next);
    req.serializer = new FollowSerializer(follow);
    next();
  }

  async approve(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      next({ errorsArray: errors.array() });
      return;
    }
    const { id } = req.body;
    const follow = await FollowService.approve(req.user.id, id, next);
    req.serializer = new FollowSerializer(follow);
    next();
  }

  async unfollow(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      next({ errorsArray: errors.array() });
      return;
    }
    const { id } = req.body;
    const follow = await FollowService.unfollow(req.user.id, id, next);
    req.serializer = new FollowSerializer(follow);
    next();
  }

  async findUsers(req, res, next) {
    const users = await FollowService.findUsers(req.user.id, req.params.name, next);
    req.serializer = new CollectionSerializer(users, { serializerType: UserSerializer });
    next();
  }

  async getFriends(req, res, next) {
    const friends = await FollowService.getFriends(req.user.id, req.params.perPage, next);
    req.serializer = new CollectionSerializer(friends, { serializerType: UserSerializer });
    next();
  }

  async getSubscriptions(req, res, next) {
    const subscriptions = await FollowService.getSubscriptions(
      req.user.id,
      req.params.perPage,
      next,
    );
    req.serializer = new CollectionSerializer(subscriptions, { serializerType: UserSerializer });
    next();
  }

  async getSubscribers(req, res, next) {
    const subscribers = await FollowService.getSubscribers(req.user.id, req.params.perPage, next);
    req.serializer = new CollectionSerializer(subscribers, { serializerType: UserSerializer });
    next();
  }
}
export default new FollowController();
