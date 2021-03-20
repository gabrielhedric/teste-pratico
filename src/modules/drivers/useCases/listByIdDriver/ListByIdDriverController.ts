import { Request, Response } from 'express';

import { ListByIdDriverUseCase } from './ListByIdDriverUseCase';

class ListByIdDriverController {

    constructor(private listByIdDriverUseCase: ListByIdDriverUseCase){}

    handle(request: Request, response: Response ) : Response {
        const { id } = request.params;

        try {
            const driver = this.listByIdDriverUseCase.execute({id});
            return response.status(201).json(driver);
        } catch (error) {
            console.log(error);
            return response.status(500).json({error: 'Cannot list the requested driver'});
        }

    }
}

export { ListByIdDriverController };