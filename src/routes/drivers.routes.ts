import { Router } from 'express';
import { createDriverController } from '../modules/drivers/useCases/createDriver';
import { listAllDriversController } from '../modules/drivers/useCases/listAllDrivers';
import { updateDriverController } from '../modules/drivers/useCases/updateDriver';
import { listByIdDriverController } from '../modules/drivers/useCases/listByIdDriver';
import { deleteDriverController } from '../modules/drivers/useCases/deleteDriver';

const driversRouter = Router();

driversRouter.post('/', (request, response ) => {
    return createDriverController.handle(request, response);
});

driversRouter.get('/', (request, response) => {
    return listAllDriversController.handle(request, response);
});

driversRouter.put('/:id', (request, response) => {
    return updateDriverController.handle(request, response);
});

driversRouter.get('/:id', (request, response) => {
    return listByIdDriverController.handle(request, response);
});

driversRouter.delete('/:id', (request, response) => {
    return deleteDriverController.handle(request, response);
});

export { driversRouter };