import { Request, Response } from 'express';
import { ListAllDriversUseCase } from './ListAllDriversUseCase';

class ListAllDriversController {
    constructor(private listAllDriversUseCase : ListAllDriversUseCase) {}

        handle(request: Request, response: Response) : Response {
            const all = this.listAllDriversUseCase.execute();

            return response.json(all);
        }
    }

export { ListAllDriversController }