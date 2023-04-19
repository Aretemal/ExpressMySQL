import logger from '../logger/logger.js';

export const responseJSON = (req, res, next) => {
  res.json(req.serializer.serialize(req));
  next();
};
