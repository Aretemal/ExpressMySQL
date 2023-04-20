/* eslint-disable no-unused-vars */
import ErrorSerializer from '../serializers/ErrorSerializer.js';

export const errorHandler = (error, req, res, next) => {
  const serializer = new ErrorSerializer(error, req.user || { id: null });
  res.status(400).send(serializer.serialize());
  next(error);
};
