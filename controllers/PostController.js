import PostService from '../services/PostService.js';

class PostController {
  async create(req, res) {
    try {
      const post = await PostService.create(req.body);
      res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const posts = await PostService.getAll();
      return res.json(posts);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res) {
    try {
      const post = await PostService.getOne(req.params.id);
      return res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req, res) {
    try {
      const { author, title, content } = req.body;
      const updatedPost = await PostService.update({ author, title, content }, req.params.id);
      return res.json(updatedPost);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async delete(req, res) {
    try {
      const oldPost = await PostService.delete(req.params.id);
      return res.json(oldPost);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}
export default new PostController();
