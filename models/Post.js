import { Sequelize, DataTypes, Model } from 'sequelize';

const sequelize = new Sequelize('database_development_SocialNetwork', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});
class Post extends Model {}

Post.init({
  // Model attributes are defined here
  authorId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Post', // We need to choose the model name
});
(async () => {
})();
export default Post;
