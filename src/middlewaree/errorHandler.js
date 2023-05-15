/* eslint-disable no-unused-vars */
import ErrorSerializer from '../serializers/ErrorSerializer.js';

export const errorHandler = (error, req, res, next) => {
  if (!(error instanceof Error)) {
    const errorId = error.id || null;
    const serializer = new ErrorSerializer(error.errorsArray, errorId);
    res.status(400)
      .send(serializer.serialize());
    next(error);
  }
  next(error);
};
