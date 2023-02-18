import {Sequelize, DataTypes, Model} from 'sequelize';
const sequelize = new Sequelize('database_development_SocialNetwork', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});
class User extends Model {}

User.init({
    firstName: {
        type: DataTypes.STRING,
    },
    lastName: {
        type: DataTypes.STRING,
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
    },
    login:{
        type: DataTypes.STRING,
        allowNull: false
    },
    status:{
        type: DataTypes.STRING,
        defaultValue: 'Add status',
    },
    ava:{
        type: DataTypes.BLOB,
    },
}, {
    sequelize,
    modelName: 'User'
});
(async () => {
})();
export default User;
