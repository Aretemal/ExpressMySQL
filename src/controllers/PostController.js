import PostService from '../services/PostService.js';
import { ResponseObjectJSON } from '../utils/createrObjectResponse.js';

class PostController {
  async create(req, res) {
    const post = await PostService.create(req.body, req.user.id);
    res.json(
      ResponseObjectJSON.render({
        type: 'post', id: post.id, attributes: post, relationships: req.body,
      }, { links: { self: req.originalUrl } }),
    );
  }

  async getAll(req, res) {
    const posts = await PostService.getAll();
    return res.json(ResponseObjectJSON.render({
      type: 'post', id: req.user.id, attributes: posts, relationships: req.body,
    }, { links: { self: req.originalUrl } }));
  }

  async getOne(req, res) {
    const post = await PostService.getOne(req.params.id);
    return res.json(ResponseObjectJSON.render({
      type: 'post', id: post.id, attributes: post, relationships: req.body,
    }, { links: { self: req.originalUrl } }));
  }

  async update(req, res) {
    const { author, title, content } = req.body;
    const updatedPost = await PostService.update({ author, title, content }, req.params.id);
    return res.json(ResponseObjectJSON.render({
      type: 'post', id: updatedPost.id, attributes: updatedPost, relationships: req.body,
    }, { links: { self: req.originalUrl } }));
  }

  async delete(req, res) {
    const oldPost = await PostService.delete(req.params.id);
    return res.json(ResponseObjectJSON.render({
      type: 'post', id: oldPost.id, attributes: oldPost, relationships: req.body,
    }, { links: { self: req.originalUrl } }));
  }
}
export default new PostController();
