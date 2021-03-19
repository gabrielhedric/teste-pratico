import express from 'express';
import { automobilesRoutes } from './routes/automobiles.routes';
import { driversRouter } from './routes/drivers.routes';
import { useAutomobilesRoutes } from './routes/useAutomobile.routes';

const app = express();

app.use(express.json());

app.use('/automobilies', automobilesRoutes);
app.use('/drivers', driversRouter);
app.use('/useautomobiles', useAutomobilesRoutes);

export default app;