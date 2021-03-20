import { Request, Response } from 'express';

import { UpdateAutomobileUseCase } from './UpdateAutomobileUseCase';

class UpdateAutomobileController {
    constructor(private updateAutomobileUseCase: UpdateAutomobileUseCase){}

    handle(request: Request, response: Response) : Response{
        const { license_plate, color, brand } = request.body;
        const { id } = request.params;
        
        try {
            const automobile = this.updateAutomobileUseCase.execute({id, license_plate, color, brand});
            return response.status(201).json(automobile);
        } catch (error) {
            return response.status(500).json({error: 'Cannot update Automobile '});
        }
    }
}

export { UpdateAutomobileController }