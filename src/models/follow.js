import { DataTypes, Model } from 'sequelize';
import { db } from '../../db.js';

class Follow extends Model {
  static associate(models) {
    this.belongsTo(models.User);
  }
}
Follow.init({
  followerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  followingId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  approved: {
    type: DataTypes.DATE,
    defaultValue: 0,
  },
}, {
  sequelize: db,
  modelName: 'Follow',
});
export default Follow;
