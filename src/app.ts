import express from 'express';
import { automobilesRoutes } from './routes/automobiles.routes';
import { driversRouter } from './routes/drivers.routes';

const app = express();

app.use(express.json());

app.use('/automobilies', automobilesRoutes);
app.use('/drivers', driversRouter);

export default app;