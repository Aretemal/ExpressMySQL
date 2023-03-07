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
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: new Date(),
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: new Date(),
  },
}, {
  sequelize: db,
  modelName: 'Post',
});
export default Post;
