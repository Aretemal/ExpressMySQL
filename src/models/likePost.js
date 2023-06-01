import { DataTypes, Model } from 'sequelize';
import { db } from '../../db.js';

class LikePost extends Model {
  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'senderLikeId',
      as: 'senderLike',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    this.belongsTo(models.Post, {
      foreignKey: 'postLikeId',
      as: 'postLike',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  }
}
LikePost.init({}, {
  sequelize: db,
  modelName: 'LikePost',
});
export default LikePost;
