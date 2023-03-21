import express from 'express';
import cors from 'cors';
import { errorHandler } from './src/middlewaree/errorHandler.js';
import router from './router.js';

const app = express();

app.use(cors()); // Use this after the variable declaration
app.use(express.json());
app.use('/api', router);
app.use(errorHandler);

export default app;
