import { Sequelize, DataTypes, Model } from 'sequelize';

const sequelize = new Sequelize('database_development_SocialNetwork', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});
class Post extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}

Post.init({
  authorId: DataTypes.STRING,
  content: DataTypes.STRING,
}, {
  sequelize,
  modelName: 'Post',
});
export default Post;
