import { Request, Response } from 'express';

import { UpdateDriverUseCase } from './UpdateDriverUseCase';

class UpdateDriverController {

    constructor(private updateDriverUseCase: UpdateDriverUseCase){}

    handle(request: Request, response: Response) : Response {
        const { id } = request.params;
        const { name } = request.body;
    
        const driver = this.updateDriverUseCase.execute({id, name});
    
        return response.status(201).json(driver);
    }
}

export { UpdateDriverController }; 