import { DataTypes, Model } from 'sequelize';
import { db } from '../../db.js';

class Dialog extends Model {
  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'senderId',
      as: 'sender',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    this.belongsTo(models.User, {
      foreignKey: 'recipientId',
      as: 'recipient',
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
  message: {
    type: DataTypes.STRING,
    allowNull: false,
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
  sequelize: db,
  modelName: 'Dialog',
});
export default Dialog;
