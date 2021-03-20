import { Request, Response } from 'express';

import { DeleteDriverUseCase } from './DeleteDriverUseCase';

class DeleteDriverController {

    constructor(private deleteDriverUseCase : DeleteDriverUseCase){}

    handle(request: Request, response: Response) {
        const { id } = request.params;

        try {
            this.deleteDriverUseCase.execute({id});
            return response.status(201).send();;
        } catch (error) {
            console.log(error);
            return response.status(500).json({error: 'Cannot delete driver'});
        }
    }
}

export { DeleteDriverController }