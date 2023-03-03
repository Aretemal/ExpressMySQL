import PostService from '../services/PostService.js';

class PostController {
  async create(req, res) {
    const response = await PostService.create(req.body, req.user.id);
    res.json(response);
  }

  async getAll(req, res) {
    const posts = await PostService.getAll();
    return res.json(posts);
  }

  async getOne(req, res) {
    const post = await PostService.getOne(req.params.id);
    return res.json(post);
  }

  async update(req, res) {
    const { author, title, content } = req.body;
    const response = await PostService.update({ author, title, content }, req.params.id);
    return res.json(response);
  }

  async delete(req, res) {
    const response = await PostService.delete(req.params.id);
    return res.json(response);
  }
}
export default new PostController();
