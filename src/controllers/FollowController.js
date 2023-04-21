import { validationResult } from 'express-validator';
import CollectionSerializer from '../serializers/CollectionSerializer.js';
import UserSerializer from '../serializers/UserSerializer.js';
import FollowService from '../services/FollowService.js';
import FollowSerializer from '../serializers/FollowSerializer.js';

class FollowController {
  async follow(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      next({ errorsArray: errors.array(), title: 'Validation Error' });
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
      next({ errorsArray: errors.array(), title: 'Validation Error' });
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
      next({ errorsArray: errors.array(), title: 'Validation Error' });
      return;
    }
    const { id } = req.body;
    const follow = await FollowService.unfollow(req.user.id, id, next);
    req.serializer = new FollowSerializer(follow);
    next();
  }

  async getFriends(req, res, next) {
    const friends = await FollowService.getFriends(req.user.id, next);
    req.serializer = new CollectionSerializer(friends, UserSerializer, req);
    next();
  }

  async getSubscriptions(req, res, next) {
    const subscriptions = await FollowService.getSubscriptions(req.user.id, next);
    req.serializer = new CollectionSerializer(subscriptions, UserSerializer, req);
    next();
  }

  async getSubscribers(req, res, next) {
    const subscribers = await FollowService.getSubscribers(req.user.id, next);
    req.serializer = new CollectionSerializer(subscribers, UserSerializer, req);
    next();
  }
}
export default new FollowController();
