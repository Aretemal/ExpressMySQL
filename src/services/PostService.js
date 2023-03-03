import Post from '../models/post.js';
import { ResponseObjectJSON } from '../utils/creatorJSON.js';

class PostService {
  async create({ newMessageText }, id) {
    await Post.create({ authorId: id, content: newMessageText });
    return ResponseObjectJSON.render({
      message: 'Post was created successfully',
      resultCode: 0,
    });
  }

  async getAll() {
    const posts = await Post.findAll();
    return ResponseObjectJSON.render({
      posts,
      resultCode: 0,
    });
  }

  async getOne(id) {
    if (!id) {
      throw new Error('Id не указан');
    }
    const post = await Post.findByPk(id);
    return ResponseObjectJSON.render({
      post,
      resultCode: 0,
    });
  }

  async update({ author, title, content }, id) {
    if (!id) {
      throw new Error('Id не указан');
    }
    const oldPost = await Post.findByPk(id);
    await oldPost.update({ author, title, content });
    return ResponseObjectJSON.render({
      message: 'Post was updated successfully',
      resultCode: 0,
    });
  }

  async delete(id) {
    if (!id) {
      throw new Error('Id не указан');
    }
    const oldPost = await Post.findByPk(id);
    await oldPost.destroy();
    return ResponseObjectJSON.render({
      message: 'Post was deleted successfully',
      resultCode: 0,
    });
  }
}

export default new PostService();
