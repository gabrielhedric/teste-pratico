import { Request, Response } from 'express';

import { CreateDriverUseCase } from './CreateDriverUseCase';

class CreateDriverController {
    constructor( private createDriverUseCase : CreateDriverUseCase){}

    handle(request: Request, response: Response) : Response{
        const { name } = request.body;

        this.createDriverUseCase.execute({name});

        return response.status(201).send();
    }
}

export { CreateDriverController };