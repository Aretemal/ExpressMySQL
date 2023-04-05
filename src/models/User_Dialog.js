import { DataTypes, Model } from 'sequelize';
import { db } from '../../db.js';

class UserDialog extends Model {
}
UserDialog.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
}, {
  sequelize: db,
  modelName: 'UserDialog',
});
export default UserDialog;
