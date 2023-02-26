import { DataTypes, Model } from 'sequelize';
import { db } from '../../db.js';

class Post extends Model {
  static associate(models) {
    this.belongsTo(models.User);
  }
}
Post.init({
  authorId: {
    type: DataTypes.INTEGER,
  },
  content: DataTypes.STRING,
}, {
  sequelize: db,
  modelName: 'Post',
});
export default Post;
