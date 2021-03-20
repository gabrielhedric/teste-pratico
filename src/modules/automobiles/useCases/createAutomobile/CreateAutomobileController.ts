import { Request, Response } from 'express';

import { CreateAutomobileUseCase } from './CreateAutomobileUseCase';

class CreateAutomobileController {
    
    constructor(private createAutomobileUseCase: CreateAutomobileUseCase){}

    handle(request: Request, response: Response) : Response{
        const { license_plate, color, brand } = request.body; 

        try {
            const createAutomobile = this.createAutomobileUseCase.execute({license_plate, color, brand}); 
            return response.status(201).json(createAutomobile);
        } catch (error) {
            return response.status(500).json({error: 'Cannot create Automobile '});
        }  
    }
}

export { CreateAutomobileController };