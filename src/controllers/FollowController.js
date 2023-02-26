import FollowService from '../services/FollowService.js';

class FollowController {
  async follow(req, res) {
    const { id } = req.body;
    const result = await FollowService.follow(req.user.id, id);
    res.json(result);
  }

  async approved(req, res) {
    const { id } = req.body;
    const result = await FollowService.approved(req.user.id, id);
    res.json(result);
  }

  async unfollow(req, res) {
    const { id } = req.body;
    const result = await FollowService.unfollow(req.user.id, id);
    res.json(result);
  }
}
export default new FollowController();
