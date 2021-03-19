import { Request, Response } from 'express';

import { CreateUseAutomobileUseCase } from './CreateUseAutomobileUseCase'


class CreateUseAutomobileController {
    constructor(private createUseAutomobileUseCase : CreateUseAutomobileUseCase ){}

    handle(request: Request, response: Response) : Response {

        const { driverUse, license_plate, carUse, reasonUse } = request.body;

        this.createUseAutomobileUseCase.execute({driverUse, carUse, reasonUse, license_plate })

        return response.status(201).send();

    }
}

export { CreateUseAutomobileController }