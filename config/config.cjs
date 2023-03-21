require('dotenv').config();

module.exports[process.env.NODE_ENV] = {
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOSTNAME,
  dialect: process.env.DB_TYPE,
  migrationStorage: 'json',
};
