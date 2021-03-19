import { Request, Response } from 'express';

import { UpdateAutomobileUseCase } from './UpdateAutomobileUseCase';

class UpdateAutomobileController {
    constructor(private updateAutomobileUseCase: UpdateAutomobileUseCase){}

    handle(request: Request, response: Response) : Response{
    const { license_plate, color, brand } = request.body;
    const { id } = request.params;

    const automobile = this.updateAutomobileUseCase.execute({id, license_plate, color, brand});

    return response.status(201).json(automobile);
    }
}

export { UpdateAutomobileController }