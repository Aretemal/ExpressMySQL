import { DataTypes, Model } from 'sequelize';
import { db } from '../../db.js';

class Follow extends Model {
  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'followerId',
      as: 'follower',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    this.belongsTo(models.User, {
      foreignKey: 'followingId',
      as: 'following',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  }
}
Follow.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  approvedAt: {
    type: DataTypes.DATE,
    defaultValue: null,
  },
}, {

  indexes: [
    {
      unique: true,
      fields: ['followerId', 'followingId'],
    },
  ],
  sequelize: db,
  modelName: 'Follow',
});
export default Follow;
