import { Request, Response } from 'express';

import { DeleteAutomobileUseCase } from './DeleteAutomobileUseCase';

class DeleteAutomobileController {

    constructor(private deleteAutomobileUseCase: DeleteAutomobileUseCase){}

        handle(request: Request, response: Response) : Response {
            const { id } = request.params;

            this.deleteAutomobileUseCase.execute({id});

            return response.status(201).send();
        }
    }

export { DeleteAutomobileController }; 