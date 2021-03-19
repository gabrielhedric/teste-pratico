import { IDriversRepository } from '../../repositories/IDriversRepository'

interface IRequest {
    name: string;
    id?: string;
}

class CreateDriverUseCase {
    constructor( private driversRepository : IDriversRepository){}
    
    execute({ name }: IRequest) : void {
    
    this.driversRepository.create({name});
    }
}

export { CreateDriverUseCase };