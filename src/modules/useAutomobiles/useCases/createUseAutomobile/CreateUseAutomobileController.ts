import { Request, Response } from 'express';

import { CreateUseAutomobileUseCase } from './CreateUseAutomobileUseCase'


class CreateUseAutomobileController {
    constructor(private createUseAutomobileUseCase : CreateUseAutomobileUseCase ){}

    handle(request: Request, response: Response) : Response {

        const { driverID, license_plate, reasonUse } = request.body;

        try {
            const useAutomobile = this.createUseAutomobileUseCase.execute({driverID, reasonUse, license_plate});
            return response.status(201).json(useAutomobile);
        } catch (error) {
            return response.status(500).json({error: 'Automobile in use, the register could not be created'});
        }
    }
}

export { CreateUseAutomobileController }