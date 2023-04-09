import { validationResult } from 'express-validator';
import CollectionSerializer from '../serializers/CollectionSerializer.js';
import PostService from '../services/PostService.js';
import PostSerializer from '../serializers/PostSerializer.js';

class PostController {
  async create(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const post = await PostService.create(req.body, req.user.id);
    req.serializer = new PostSerializer(post);
    next();
  }

  async getAll(req, res, next) {
    const posts = await PostService.getAll(req.user.id);
    req.serializer = new CollectionSerializer(posts, { serializerType: PostSerializer });
    next();
  }

  async getOne(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const post = await PostService.getOne(req.params.id);
    req.serializer = new PostSerializer(post);
    next();
  }

  async update(req, res, next) {
    const { author, title, content } = req.body;
    const updatedPost = await PostService.update({ author, title, content }, req.params.id);
    req.serializer = new PostSerializer(updatedPost);
    next();
  }

  async delete(req, res, next) {
    const oldPost = await PostService.delete(req.params.id);
    req.serializer = new PostSerializer(oldPost);
    next();
  }
}
export default new PostController();
