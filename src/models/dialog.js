import { DataTypes, Model } from 'sequelize';
import { db } from '../../db.js';

class Dialog extends Model {
  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'firstId',
      as: 'first',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    this.belongsTo(models.User, {
      foreignKey: 'secondId',
      as: 'second',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    this.hasMany(models.Message, {
      foreignKey: 'dialogId',
      as: 'messages',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  }
}
Dialog.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
}, {
  sequelize: db,
  modelName: 'Dialog',
});
export default Dialog;
