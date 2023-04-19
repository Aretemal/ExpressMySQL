import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
import logger from './src/logger/logger.js';

dotenv.config();
function splitByLength(str) {
  return str.match(RegExp(`.{1,${90}}`, 'gu')).join('\n');
}
export const db = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    logging: (msg) => logger.sequelizeLogger.log('info', splitByLength(msg)),
    host: process.env.DB_HOSTNAME,
    dialect: process.env.DB_TYPE,
    port: process.env.DB_PORT,
  },
);
