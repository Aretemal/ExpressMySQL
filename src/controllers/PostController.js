import PostService from '../services/PostService.js';
import { ResponseObjectJSON } from '../utils/createrObjectResponse.js';
import fullUrlCreator from '../utils/fullUrlCreator.js';
import PostSerializers from '../utils/JsonSerializer/PostSerializers.js';

class PostController {
  async create(req, res) {
    const post = await PostService.create(req.body, req.user.id);
    res.json(PostSerializers.postSerialize(post, fullUrlCreator(req), 'Post', req.user.id));
  }

  async getAll(req, res) {
    const posts = await PostService.getAll();
    res.json(PostSerializers.postSerialize(posts, fullUrlCreator(req), 'Array Posts', req.user.id));
  }

  async getOne(req, res) {
    const post = await PostService.getOne(req.params.id);
    res.json(PostSerializers.postSerialize(post, fullUrlCreator(req), 'Post', req.user.id));
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
