import { DataTypes, Model } from 'sequelize';
import { db } from '../../db.js';

class Dialog extends Model {
  static associate(models) {
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
  name: {
    type: DataTypes.STRING,
    defaultValue: 'Default name',
  },
}, {
  sequelize: db,
  modelName: 'Dialog',
});
export default Dialog;
