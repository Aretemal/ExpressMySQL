import Post from '../models/post.js';
import AppError from '../utils/AppError.js';

class PostService {
  async create({ newMessageText }, id) {
    const createdPost = await Post.create({ authorId: id, content: newMessageText });
    return createdPost;
  }

  async getAll(id) {
    const posts = await Post.findAll({ where: { authorId: id } });
    return posts;
  }

  async getOne(id) {
    if (!id) {
      throw new AppError('id not specified', 400);
    }
    const post = await Post.findByPk(id);
    return post;
  }

  async update({ author, title, content }, id) {
    if (!id) {
      throw new AppError('id not specified', 400);
    }
    const oldPost = await Post.findByPk(id);
    const updatedPost = await oldPost.update({ author, title, content });
    return updatedPost;
  }

  async delete(id) {
    if (!id) {
      throw new AppError('id not specified', 400);
    }
    const oldPost = await Post.findByPk(id);
    const deletedPost = await oldPost.destroy();
    return deletedPost;
  }
}

export default new PostService();
