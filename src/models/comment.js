import { DataTypes, Model } from 'sequelize';
import { db } from '../../db.js';

class Comment extends Model {
  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'senderCommentId',
      as: 'senderComment',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    this.belongsTo(models.Post, {
      foreignKey: 'postCommentId',
      as: 'postComment',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  }
}
Comment.init({
  message: DataTypes.STRING,
}, {
  sequelize: db,
  modelName: 'Comment',
});
export default Comment;
