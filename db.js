import * as dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
import { createNamespace } from 'cls-hooked';

dotenv.config();
export const namespace = createNamespace('ns');
Sequelize.useCLS(namespace);

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
