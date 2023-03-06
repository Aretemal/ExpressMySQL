import * as dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();
export const db = new Sequelize(
  process.env.DEVELOPMENT_DB_DATABASE,
  process.env.DEVELOPMENT_DB_USERNAME,
  process.env.DEVELOPMENT_DB_PASSWORD,
  {
    host: process.env.DEVELOPMENT_DB_HOSTNAME,
    dialect: process.env.DEVELOPMENT_DB_TYPE,
  },
);

export function openConnection() {
  return db.authenticate();
}

export function closeConnection() {
  return db.close();
}
