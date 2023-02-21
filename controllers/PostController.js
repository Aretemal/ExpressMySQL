import PostService from '../services/PostService.js';

class PostController {
  async create(req, res) {
    const post = await PostService.create(req.body, req.user.id);
    res.json(post);
  }

  async getAll(req, res) {
    const posts = await PostService.getAll(req.user.id);
    return res.json(posts);
  }

  async getOne(req, res) {
    const post = await PostService.getOne(req.params.id);
    return res.json(post);
  }

  async update(req, res) {
    const { author, title, content } = req.body;
    const updatedPost = await PostService.update({ author, title, content }, req.params.id);
    return res.json(updatedPost);
  }

  async delete(req, res) {
    const oldPost = await PostService.delete(req.params.id);
    return res.json(oldPost);
  }
}
export default new PostController();
