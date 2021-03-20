import { Request, Response } from 'express';
import { ListAllDriversUseCase } from './ListAllDriversUseCase';

class ListAllDriversController {
    constructor(private listAllDriversUseCase : ListAllDriversUseCase) {}

        handle(request: Request, response: Response) : Response {
            
            try {
                const all = this.listAllDriversUseCase.execute();
                return response.json(all);
            } catch (error) {
                console.log(error);
                return response.status(500).json({error: 'Cannot list drivers'});
            }

        }
    }

export { ListAllDriversController }