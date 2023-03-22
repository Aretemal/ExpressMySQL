import FollowService from '../services/FollowService.js';
import fullUrlCreator from '../utils/fullUrlCreator.js';
import FollowSerializers from '../utils/JsonSerializer/FollowSerializers.js';

class FollowController {
  async follow(req, res) {
    const { id } = req.body;
    const data = await FollowService.follow(req.user.id, id);
    res.json(FollowSerializers.followSerialize(data, fullUrlCreator(req), 'Follow', req.user.id));
  }

  async approve(req, res) {
    const { id } = req.body;
    const data = await FollowService.approve(req.user.id, id);
    res.json(FollowSerializers.followSerialize(data, fullUrlCreator(req), 'Approve', req.user.id));
  }

  async unfollow(req, res) {
    const { id } = req.body;
    const data = await FollowService.unfollow(req.user.id, id);
    res.json(FollowSerializers.followSerialize(data, fullUrlCreator(req), 'Unfollow', req.user.id));
  }
}
export default new FollowController();
