import path from 'path';
import * as dotenv from 'dotenv';

export default () => {
  dotenv.config({ path: path.resolve(__dirname, '../env/.env.test') });
};
