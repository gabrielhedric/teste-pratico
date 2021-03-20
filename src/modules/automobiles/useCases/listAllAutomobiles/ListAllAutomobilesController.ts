import { Request, Response } from 'express';
import { ListAllAutomobilesUseCase } from './ListAllAutomobilesUseCase';

class ListAllAutomobilesController {
    constructor(private listAllAutomobilesUseCase: ListAllAutomobilesUseCase){}
    
    handle(request: Request, response: Response) : Response {
    
        try {
            const all = this.listAllAutomobilesUseCase.execute();
            return response.json(all);
        } catch (error) {
            return response.status(500).json({error: 'Cannot list all Automobiles '});
        }  
    }
}

export { ListAllAutomobilesController }