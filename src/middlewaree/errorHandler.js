export const errorHandler = (error, req, res, next) => { // eslint-disable-line no-unused-vars
  // Logging the error here
  console.log(error);
  // Returning the status and error message to client
  res.status(400).send(error.message);
};
