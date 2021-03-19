import { Request, Response } from 'express';

import { ListByIdDriverUseCase } from './ListByIdDriverUseCase';

class ListByIdDriverController {

    constructor(private listByIdDriverUseCase: ListByIdDriverUseCase){}

    handle(request: Request, response: Response ) : Response {
        const { id } = request.params;

        const driver = this.listByIdDriverUseCase.execute({id});

        return response.status(201).json(driver);
    }
}

export { ListByIdDriverController };