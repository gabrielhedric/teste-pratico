import { Router } from 'express';
import { createAutomobileController } from '../modules/automobiles/useCases/createAutomobile';
import { listAllAutomobilesController } from '../modules/automobiles/useCases/listAllAutomobiles';
import { updateAutomobileController } from '../modules/automobiles/useCases/updateAutomobile';
import { deleteAutomobileController} from '../modules/automobiles/useCases/deleteAutomobile';
import { listByIdAutomobileController } from '../modules/automobiles/useCases/listByIdAutomobilles';


const automobilesRoutes = Router();

automobilesRoutes.post('/', ( request, response ) => {
    return createAutomobileController.handle(request, response);
});

automobilesRoutes.get('/', (request, response) => {
    return listAllAutomobilesController.handle(request, response);
});

automobilesRoutes.put('/:id', (request, response) => {
    return updateAutomobileController.handle(request, response);
});

automobilesRoutes.delete('/:id', (request, response ) => {
    return deleteAutomobileController.handle(request, response);
});

automobilesRoutes.get('/:id', (request, response ) => {
    return listByIdAutomobileController.handle(request, response);
})

export { automobilesRoutes };