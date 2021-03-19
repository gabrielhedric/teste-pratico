import { Request, Response } from 'express';
import { ListAllAutomobilesUseCase } from './ListAllAutomobilesUseCase';

class ListAllAutomobilesController {
    constructor(private listAllAutomobilesUseCase: ListAllAutomobilesUseCase){}
    
    handle(request: Request, response: Response) : Response {
    const all = this.listAllAutomobilesUseCase.execute();

    return response.json(all);
    }
}

export { ListAllAutomobilesController }