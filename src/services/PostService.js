import Post from '../models/post.js';
import Comment from '../models/comment.js';
import LikePost from '../models/likePost.js';

class PostService {
  async create({ newMessageText }, id) {
    const createdPost = await Post.create({ authorId: id, content: newMessageText });
    return createdPost;
  }

  async getAll(id) {
    const posts = await Post.findAll({ where: { authorId: id } });
    const postsWithCommentsAndLikes = await Promise.all(posts.map(async (post) => {
      const likesCount = await LikePost.findAll({ where: { postLikeId: post.id } });
      post.likesCount = likesCount.length;
      const isMeLike = await LikePost.findAll({
        where: {
          postLikeId: post.id,
          senderLikeId: id
        }
      });
      post.isMeLike = !!isMeLike.length;
      const commentCount = await Comment.findAll({ where: { postCommentId: post.id } });
      post.commentCount = commentCount.length;
      return post;
    }));
    return postsWithCommentsAndLikes;
  }

  async getOne(id, next) {
    if (!id) {
      next({ errorsArray: [{ msg: 'Id not specified' }] });
      return;
    }
    const post = await Post.findByPk(id);
    return post;
  }

  async update({ author, title, content }, id, next) {
    if (!id) {
      next({ errorsArray: [{ msg: 'Id not specified' }] });
      return;
    }
    const oldPost = await Post.findByPk(id);
    const updatedPost = await oldPost.update({ author, title, content });
    return updatedPost;
  }

  async delete(id, next) {
    if (!id) {
      next({ errorsArray: [{ msg: 'Id not specified' }] });
      return;
    }
    const oldPost = await Post.findByPk(id);
    const deletedPost = await oldPost.destroy();
    return deletedPost;
  }

  async createComment({ id, message }, senderId, next) {
    if (!id && !message) {
      next({ errorsArray: [{ msg: 'Id not specified' }] });
      return;
    }
    const comment = await Comment.create({
      postCommentId: id,
      senderCommentId: senderId,
      message,
    });
    return comment;
  }

  async deleteComment(id, next) {
    if (!id) {
      next({ errorsArray: [{ msg: 'Id not specified' }] });
      return;
    }
    const comment = await Comment.findByPk(id);
    const deletedComment = await comment.destroy();
    return deletedComment;
  }

  async getAllComments(id, next) {
    if (!id) {
      next({ errorsArray: [{ msg: 'Id not specified' }] });
      return;
    }
    const comments = await Comment.findAll({
      where: {
        postCommentId: id,
      },
    });
    return comments;
  }

  async setLike(postId, authId, next) {
    if (!postId) {
      next({ errorsArray: [{ msg: 'Id not specified' }] });
      return;
    }
    const checkLike = await LikePost.findOne({
      where: {
        senderLikeId: authId,
        postLikeId: postId,
      },
    });
    if (checkLike) {
      next({ errorsArray: [{ msg: 'Like defined' }] });
      return;
    }
    const like = await LikePost.create({
      senderLikeId: authId,
      postLikeId: postId,
    });
    return like;
  }

  async deleteLike(postId, authId, next) {
    if (!postId) {
      next({ errorsArray: [{ msg: 'Id not specified' }] });
      return;
    }
    const like = await LikePost.findOne({
      where: {
        postLikeId: postId,
        senderLikeId: authId,
      },
    });
    if (!like) {
      next({ errorsArray: [{ msg: 'Like not found' }] });
      return;
    }
    const deletedLike = await like.destroy();
    return deletedLike;
  }
}

export default new PostService();
