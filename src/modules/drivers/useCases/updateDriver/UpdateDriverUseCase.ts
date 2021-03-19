import { response } from 'express';
import { IDriversRepository, ICreateDriver } from '../../repositories/IDriversRepository';

class UpdateDriverUseCase {
    constructor(private driversRepository: IDriversRepository){}

    execute({id, name} : ICreateDriver){
        
        this.driversRepository.update({id, name});
    }
}

export { UpdateDriverUseCase }