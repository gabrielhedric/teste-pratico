import { IDriversRepository } from '../../repositories/IDriversRepository'
import { Driver } from '../../model/Driver';

interface IRequest {
    name: string;
    id?: string;
}

class CreateDriverUseCase {
    constructor( private driversRepository : IDriversRepository) {}
    
    execute({ name }: IRequest) : Driver {
    
    const createDriver = this.driversRepository.create({name});

    return createDriver;

    }
}

export { CreateDriverUseCase };