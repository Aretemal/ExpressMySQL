/* eslint-disable no-unused-vars */
import logger from '../logger/logger.js';

export const errorLogger = (error, req, res, next) => {
  logger.errorLogger.log('error', `${error.message}`);
};
