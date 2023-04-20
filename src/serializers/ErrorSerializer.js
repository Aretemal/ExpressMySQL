import dotenv from 'dotenv';
import User from '../models/user.js';
import { errorCodes, titleCodes } from '../utils/ErrorCode.js';

dotenv.config();

class ErrorSerializer {
  constructor(error, { id }) {
    this.errorsArray = error.errorsArray;
    if (id) {
      const user = User.findOne({
        attributes: ['lang'],
        where: {
          id,
        },
      });
      this.lang = user.dataValues.lang;
    } else {
      this.lang = 'ru';
    }
  }

  serialize() {
    return {
      errors:
        this.errorsArray.map((item) => {
          const data = {
            status: item.msg,
            title: titleCodes(item.msg, this.lang),
            detail: errorCodes(item.msg, this.lang),
          };
          if (item.location && item.param) {
            data.source = {
              pointed: `${item.location}/${item.param}`,
            };
          }
          return data;
        }),
    };
  }
}
export default ErrorSerializer;
