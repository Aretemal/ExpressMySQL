import { DataTypes, Model } from 'sequelize';
import { db } from '../../db.js';

class User extends Model {
  static associate(models) {
    this.hasMany(models.Post, {
      foreignKey: 'authorId',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    this.hasMany(models.Follow, {
      foreignKey: 'followerId',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    this.hasMany(models.Follow, {
      foreignKey: 'followingId',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  }
}
const model = User.init({
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  password: DataTypes.STRING,
  email: DataTypes.STRING,
  login: DataTypes.STRING,
  status: DataTypes.STRING,
  ava: DataTypes.BLOB,
}, {
  sequelize: db,
  modelName: 'User',
});

export default model;
