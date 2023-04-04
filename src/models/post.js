import { DataTypes, Model } from 'sequelize';
import { db } from '../../db.js';

class Post extends Model {
  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'authorId',
      as: 'author',
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
