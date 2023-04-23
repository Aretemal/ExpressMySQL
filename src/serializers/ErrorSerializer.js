import dotenv from 'dotenv';
import User from '../models/user.js';
import ErrorCode from '../utils/ErrorCode.js';

dotenv.config();

class ErrorSerializer {
  constructor(error, id) {
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
            status: ErrorCode.getStatus(item.msg),
            title: ErrorCode.getTitle(item.msg, this.lang),
            detail: ErrorCode.getLanguage(item.msg, this.lang),
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
