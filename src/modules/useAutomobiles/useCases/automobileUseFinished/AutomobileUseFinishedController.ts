import { Request, Response } from 'express';

import { AutomobileUseFinishedCase } from './AutomobileUseFinishedUseCase';

class AutomobileUseFinishedController {
    constructor(private automobileUseFinishedCase: AutomobileUseFinishedCase){}

    handle(request: Request, response: Response ) : Response {
        const { useAutomobileID } = request.params;

        try {
            const finishedUseAutomobile = this.automobileUseFinishedCase.execute(useAutomobileID);
            return response.status(200).json(finishedUseAutomobile);
        } catch (error) {
            return response.status(500).json({error: 'Cant create use automobile'});
        }
    }
}

export { AutomobileUseFinishedController }