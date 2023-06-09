import { validationResult } from 'express-validator';
import CollectionSerializer from '../serializers/CollectionSerializer.js';
import PostService from '../services/PostService.js';
import PostSerializer from '../serializers/PostSerializer.js';
import CommentSerializer from '../serializers/CommentSerializer.js';
import LikeSerializer from '../serializers/LikeSerializer.js';
import { getClass } from '../utils/getClass.js';

class PostController {
  async create(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      next({ errorsArray: errors.array() });
      return;
    }
    const post = await PostService.create(req.body, req.user.id, next);
    req.serializer = new PostSerializer(post);
    next();
  }

  async getAll(req, res, next) {
    const posts = await PostService.getAll(req.params.id);
    req.serializer = new CollectionSerializer(posts, { serializerType: PostSerializer });
    next();
  }

  async getOne(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      next({ errorsArray: errors.array() });
      return;
    }
    const post = await PostService.getOne(req.params.id, next);
    req.serializer = new PostSerializer(post);
    next();
  }

  async update(req, res, next) {
    const { author, title, content } = req.body;
    const updatedPost = await PostService.update({ author, title, content }, req.params.id, next);
    req.serializer = new PostSerializer(updatedPost);
    next();
  }

  async delete(req, res, next) {
    const oldPost = await PostService.delete(req.params.id, next);
    req.serializer = new PostSerializer(oldPost);
    next();
  }

  async createComment(req, res, next) {
    const newComment = await PostService.createComment(req.body, req.user.id, next);
    req.serializer = new CommentSerializer(newComment);
    next();
  }

  async deleteComment(req, res, next) {
    const oldComment = await PostService.deleteComment(req.params.id, next);
    req.serializer = new CommentSerializer(oldComment);
    next();
  }

  async getAllComments(req, res, next) {
    const comments = await PostService.getAllComments(req.params.id, next);
    req.serializer = new CollectionSerializer(
      comments,
      {
        serializerType: CommentSerializer,
        include: ['user'],
        getter: getClass,
      }
    );
    next();
  }

  async setLike(req, res, next) {
    const like = await PostService.setLike(req.params.id, req.user.id, next);
    req.serializer = new LikeSerializer(like);
    next();
  }

  async deleteLike(req, res, next) {
    const deletedLike = await PostService.deleteLike(req.params.id, req.user.id, next);
    req.serializer = new LikeSerializer(deletedLike);
    next();
  }
}
export default new PostController();
