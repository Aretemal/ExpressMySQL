import path from 'path';
import * as dotenv from 'dotenv';

export default () => {
  dotenv.config({ path: path.resolve('../.env.test') });
  console.log(process.env.DB_DATABASE);
};
