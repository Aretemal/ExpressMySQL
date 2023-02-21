import { Sequelize, DataTypes, Model } from 'sequelize';

const sequelize = new Sequelize('database_development_SocialNetwork', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});
class Subscriber extends Model {}

Subscriber.init({
  firstUserId: {
    type: DataTypes.STRING,
  },
  secondUserId: {
    type: DataTypes.STRING,
  },
  firstSubToSecond: {
    type: DataTypes.STRING,
  },
  secondSubToFirst: {
    type: DataTypes.STRING,
  },
}, {
  sequelize,
  modelName: 'Subscriber',
});
(async () => {
})();
export default Subscriber;
