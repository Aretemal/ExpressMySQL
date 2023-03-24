import express from 'express';
import cors from 'cors';
import { errorHandler } from './src/middlewaree/errorHandler.js';
import router from './router.js';
import { responseJSON } from './src/middlewaree/responseJSON.js';
import { tokenMiddleware } from './src/middlewaree/tokenMiddleware.js';

const app = express();

app.use(cors()); // Use this after the variable declaration
app.use(express.json());
app.use(tokenMiddleware);
app.use('/api', router);
app.use(errorHandler);
app.use(responseJSON);

export default app;
