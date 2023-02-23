import { Sequelize, DataTypes, Model } from 'sequelize';

const sequelize = new Sequelize('database_development_SocialNetwork', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});
class Follow extends Model {
  /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  static associate(models) {
    // define association here
  }
}
Follow.init({
  userId1: DataTypes.STRING,
  userId2: DataTypes.STRING,
  approved: DataTypes.STRING,
}, {
  sequelize,
  modelName: 'Follow',
});
export default Follow;
