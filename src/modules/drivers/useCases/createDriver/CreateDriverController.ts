import { Request, Response } from 'express';

import { CreateDriverUseCase } from './CreateDriverUseCase';

class CreateDriverController {
    constructor( private createDriverUseCase : CreateDriverUseCase){}

    handle(request: Request, response: Response) : Response{
        const { name } = request.body;

        try {
            this.createDriverUseCase.execute({name});
            return response.status(201).send()
        } catch (error) {
            console.log(error);
            return response.status(500).json({error: 'Cannot create driver'});
        }
    }
}

export { CreateDriverController };