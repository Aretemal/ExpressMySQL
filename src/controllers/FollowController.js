import FollowService from '../services/FollowService.js';

class FollowController {
  async follow(req, res) {
    const { id } = req.body;
    const response = await FollowService.follow(req.user.id, id);
    res.json(response);
  }

  async approve(req, res) {
    const { id } = req.body;
    const response = await FollowService.approve(req.user.id, id);
    res.json(response);
  }

  async unfollow(req, res) {
    const { id } = req.body;
    const response = await FollowService.unfollow(req.user.id, id);
    res.json(response);
  }
}
export default new FollowController();
