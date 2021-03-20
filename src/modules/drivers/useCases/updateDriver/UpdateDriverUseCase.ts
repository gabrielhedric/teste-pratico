
import { IDriversRepository, ICreateDriver } from '../../repositories/IDriversRepository';

class UpdateDriverUseCase {
    constructor(private driversRepository: IDriversRepository){}

    execute({id, name} : ICreateDriver){
        
    const updateDriver = this.driversRepository.update({id, name});
    
    return updateDriver;

    }
}

export { UpdateDriverUseCase }