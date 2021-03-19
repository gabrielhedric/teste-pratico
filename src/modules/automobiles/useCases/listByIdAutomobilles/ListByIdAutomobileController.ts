import { Request, Response } from 'express';

import { ListByIdAutomobileUseCase } from './ListByIdAutomobileUseCase';

class ListByIdAutomobileController {

    constructor(private listByIdAutomobileUseCase: ListByIdAutomobileUseCase){}

    handle(request: Request, response: Response) : Response {
    const { id } = request.params;

    const automobile = this.listByIdAutomobileUseCase.execute(id);

    return response.json(automobile)
    }
}

export { ListByIdAutomobileController };