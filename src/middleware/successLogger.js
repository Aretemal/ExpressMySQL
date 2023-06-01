import logger from '../logger/logger.js';

export const successLogger = (req, res, next) => {
  logger.successLogger.log(
    'info',
    `Request ${req.protocol}://${req.get('host')}${req.originalUrl} completed successfully`,
  );
  next();
};
