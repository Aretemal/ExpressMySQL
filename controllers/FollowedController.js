import FollowedService from '../services/FollowedService.js';

class FollowedController {
  async follow(req, res) {
    const { id } = req.body;
    const result = await FollowedService.follow(req.user.id, id);
    res.json(result);
  }

  async followBack(req, res) {
    const { id } = req.body;
    const result = await FollowedService.followBack(req.user.id, id);
    res.json(result);
  }

  async unfollow(req, res) {
    const { id } = req.body;
    const result = await FollowedService.unfollow(req.user.id, id);
    res.json(result);
  }
}
export default new FollowedController();
