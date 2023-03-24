import PostService from '../services/PostService.js';
import fullUrlCreator from '../utils/fullUrlCreator.js';
import PostSerializers from '../serializers/PostSerializers.js';

class PostController {
  async create(req, res, next) {
    const post = await PostService.create(req.body, req.user.id);
    const serializer = new PostSerializers({
      attributes: post, id: req.user.id, type: 'Post', link: fullUrlCreator(req),
    });
    req.serializer = serializer;
    next();
  }

  async getAll(req, res, next) {
    const posts = await PostService.getAll();
    const serializer = new PostSerializers({
      attributes: posts, id: req.user.id, type: 'Posts', link: fullUrlCreator(req),
    });
    req.serializer = serializer;
    next();
  }

  async getOne(req, res, next) {
    const post = await PostService.getOne(req.params.id);
    const serializer = new PostSerializers({
      attributes: post, id: req.user.id, type: 'Post', link: fullUrlCreator(req),
    });
    req.serializer = serializer;
    next();
  }

  async update(req, res, next) {
    const { author, title, content } = req.body;
    const updatedPost = await PostService.update({ author, title, content }, req.params.id);
    const serializer = new PostSerializers({
      attributes: updatedPost, id: req.user.id, type: 'Post', link: fullUrlCreator(req),
    });
    req.serializer = serializer;
    next();
  }

  async delete(req, res, next) {
    const oldPost = await PostService.delete(req.params.id);
    const serializer = new PostSerializers({
      attributes: oldPost, id: req.user.id, type: 'Post', link: fullUrlCreator(req),
    });
    req.serializer = serializer;
    next();
  }
}
export default new PostController();
