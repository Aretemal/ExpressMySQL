import { DataTypes, Model } from 'sequelize';
import { db } from '../../db.js';

class Follow extends Model {
  static associate(models) {
    this.belongsTo(models.User);
  }
}
Follow.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  followerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  followingId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  approvedAt: {
    type: DataTypes.DATE,
    defaultValue: 0,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: new Date(),
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: new Date(),
  },
}, {

  indexes: [
    {
      unique: false,
      fields: ['followerId', 'followingId'],
    },
  ],
  sequelize: db,
  modelName: 'Follow',
});
export default Follow;
