export const errorHandler = (error, req, res, next) => { // eslint-disable-line no-unused-vars
  // Logging the error here
  console.log(error);
  res.status(400).send(error.message);
  next(error);
};
