import * as dotenv from 'dotenv';

dotenv.config();
import { Sequelize } from 'sequelize';

export const db = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOSTNAME,
    dialect: process.env.DB_TYPE,
  },
);
