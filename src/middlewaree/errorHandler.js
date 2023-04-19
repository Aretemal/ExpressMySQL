/* eslint-disable no-unused-vars */
import logger from '../logger/logger.js';

export const errorHandler = (error, req, res, next) => res.status(error.statusCode).send(error.message);
