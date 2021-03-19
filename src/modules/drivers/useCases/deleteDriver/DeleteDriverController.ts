import { Request, Response } from 'express';

import { DeleteDriverUseCase } from './DeleteDriverUseCase';

class DeleteDriverController {

    constructor(private deleteDriverUseCase : DeleteDriverUseCase){}

    handle(request: Request, response: Response) {
        const { id } = request.params;

        this.deleteDriverUseCase.execute({id});

        return response.status(201).send();
    }
}

export { DeleteDriverController }