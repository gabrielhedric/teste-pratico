import { Request, Response } from 'express';

import { ListByIdAutomobileUseCase } from './ListByIdAutomobileUseCase';

class ListByIdAutomobileController {

    constructor(private listByIdAutomobileUseCase: ListByIdAutomobileUseCase){}

    handle(request: Request, response: Response) : Response {
    const { id } = request.params;

    try {
        const automobile = this.listByIdAutomobileUseCase.execute(id);
        return response.json(automobile)
    } catch (error) {
        return response.status(500).json({error: 'Cannot list by id Automobile '});
    }   
    }
}

export { ListByIdAutomobileController };