import { Router } from 'express';
import { createUseAutomobileController } from '../modules/useAutomobiles/useCases/createUseAutomobile';
const useAutomobilesRoutes = Router();

useAutomobilesRoutes.post('/', (request, response) => {
    return createUseAutomobileController.handle(request, response );
});


export { useAutomobilesRoutes };