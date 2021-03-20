import { Router } from 'express';
import { createUseAutomobileController } from '../modules/useAutomobiles/useCases/createUseAutomobile';
import { listRegisterAutomobileController } from '../modules/useAutomobiles/useCases/listRegister';
import {automobileUseFinishedContoller} from '../modules/useAutomobiles/useCases/automobileUseFinished';


const useAutomobilesRoutes = Router();

useAutomobilesRoutes.post('/', (request, response) => {
    return createUseAutomobileController.handle(request, response );
});

useAutomobilesRoutes.get('/', (request, response) => {
    return listRegisterAutomobileController.handle(request, response);
});

useAutomobilesRoutes.put('/:useAutomobileID', (request, response) => {
    return automobileUseFinishedContoller.handle(request, response);
})


export { useAutomobilesRoutes };