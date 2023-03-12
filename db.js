import * as dotenvF from 'dotenv-flow';
import { Sequelize } from 'sequelize';

dotenvF.config();

export const db = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOSTNAME,
    dialect: process.env.DB_TYPE,
  },
);
