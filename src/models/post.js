import { DataTypes, Model } from 'sequelize';
import { db } from '../../db.js';
import Comment from "./comment.js";

class Post extends Model {
  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'authorId',
      as: 'author',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    this.hasMany(models.Comment, {
      foreignKey: 'postCommentId',
      as: 'postComment',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    this.hasMany(models.LikePost, {
      foreignKey: 'postLikeId',
      as: 'postLike',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  }
}
Post.init({
  content: DataTypes.STRING,
}, {
  sequelize: db,
  modelName: 'Post',
});
export default Post;
