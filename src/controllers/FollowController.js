import FollowService from '../services/FollowService.js';
import fullUrlCreator from '../utils/fullUrlCreator.js';
import FollowJsonCreator from '../utils/JsonPresenters/FollowJsonCreator.js';

class FollowController {
  async follow(req, res) {
    const { id } = req.body;
    const data = await FollowService.follow(req.user.id, id);
    res.json(FollowJsonCreator.follow(data, fullUrlCreator(req)));
  }

  async approve(req, res) {
    const { id } = req.body;
    const data = await FollowService.approve(req.user.id, id);
    res.json(FollowJsonCreator.approve(data, fullUrlCreator(req)));
  }

  async unfollow(req, res) {
    const { id } = req.body;
    const data = await FollowService.unfollow(req.user.id, id);
    res.json(FollowJsonCreator.unfollow(data, fullUrlCreator(req)));
  }
}
export default new FollowController();
