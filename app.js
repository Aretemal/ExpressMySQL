import express from 'express';
import cors from 'cors';
import { errorHandler } from './src/middleware/errorHandler.js';
import router from './router.js';
import { errorLogger } from './src/middleware/errorLogger.js';
import { responseJSON } from './src/middleware/responseJSON.js';
import { successLogger } from './src/middleware/successLogger.js';
import { tokenMiddleware } from './src/middleware/tokenMiddleware.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(tokenMiddleware);
app.use('/api', router);
app.use(responseJSON);
app.use(successLogger);
app.use(errorHandler);
app.use(errorLogger);

export default app;
