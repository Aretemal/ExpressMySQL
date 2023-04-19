import express from 'express';
import cors from 'cors';
import { errorHandler } from './src/middlewaree/errorHandler.js';
import router from './router.js';
import { errorLogger } from './src/middlewaree/errorLogger.js';
import { responseJSON } from './src/middlewaree/responseJSON.js';
import { successLogger } from './src/middlewaree/successLogger.js';
import { tokenMiddleware } from './src/middlewaree/tokenMiddleware.js';

const app = express();

app.use(cors()); // Use this after the variable declaration
app.use(express.json());
app.use(tokenMiddleware);
app.use('/api', router);
app.use(responseJSON);
app.use(successLogger);
app.use(errorHandler);
app.use(errorLogger);

export default app;
