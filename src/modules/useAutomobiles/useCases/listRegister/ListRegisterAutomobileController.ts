import { Request, Response } from 'express';

import { ListRegisterAutomobileUseCase } from './listRegisterAutomobileUseCase';

class ListRegisterAutomobileController {

    constructor(private listRegisterAutomobileUseCase : ListRegisterAutomobileUseCase ){}

    handle(request: Request, response: Response) : Response {
        
        try {
            const all = this.listRegisterAutomobileUseCase.execute();            
            return response.status(201).json(all);
        } catch (error) {
            return response.status(500).json({error: 'Unable to list registrations'});
        }
    }
}

export { ListRegisterAutomobileController }; 