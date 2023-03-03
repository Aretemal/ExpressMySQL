import * as dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();
export const db = new Sequelize('database_development_SocialNetwork', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

export function openConnection() {
  return db.authenticate();
}

export function closeConnection() {
  return db.close();
}
