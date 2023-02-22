import { Sequelize, DataTypes, Model } from 'sequelize';

const sequelize = new Sequelize('database_development_SocialNetwork', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});
class User extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}

User.init({
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  password: DataTypes.STRING,
  email: DataTypes.STRING,
  login: DataTypes.STRING,
  status: DataTypes.STRING,
  ava: DataTypes.BLOB,
}, {
  sequelize,
  modelName: 'User',
});
export default User;
