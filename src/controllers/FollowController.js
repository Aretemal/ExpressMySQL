import FollowService from '../services/FollowService.js';
import { ResponseObjectJSON } from '../utils/createrObjectResponse.js';

class FollowController {
  async follow(req, res) {
    const { id } = req.body;
    const data = await FollowService.follow(req.user.id, id);
    res.json(
      ResponseObjectJSON.render({
        type: 'follow', attributes: data, relationships: req.body,
      }, { links: { self: req.originalUrl } }),
    );
  }

  async approve(req, res) {
    const { id } = req.body;
    const data = await FollowService.approve(req.user.id, id);
    res.json(
      ResponseObjectJSON.render({
        type: 'approve', attributes: data, relationships: req.body,
      }, { links: { self: req.originalUrl } }),
    );
  }

  async unfollow(req, res) {
    const { id } = req.body;
    const data = await FollowService.unfollow(req.user.id, id);
    res.json(
      ResponseObjectJSON.render({
        type: 'unfollow', attributes: data, relationships: req.body,
      }, { links: { self: req.originalUrl } }),
    );
  }
}
export default new FollowController();
