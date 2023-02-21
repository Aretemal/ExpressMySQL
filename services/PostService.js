import Post from '../models/Post.js';

class PostService {
  async create(post) {
    const createdPost = await Post.create(post);
    return createdPost;
  }

  async getAll(id) {
    const posts = await Post.findAll({
      where: {
        authorId: id,
      },
    });
    return posts;
  }

  async getOne(id) {
    if (!id) {
      throw new Error('Id не указан');
    }
    const post = await Post.findByPk(id);
    return post;
  }

  async update({ author, title, content }, id) {
    if (!id) {
      throw new Error('Id не указан');
    }
    const oldPost = await Post.findByPk(id);
    const updatedPost = await oldPost.update({ author, title, content });
    return updatedPost;
  }

  async delete(id) {
    if (!id) {
      throw new Error('Id не указан');
    }
    const oldPost = await Post.findByPk(id);
    const deletedPost = await oldPost.destroy();
    return deletedPost;
  }
}

export default new PostService();
