import { Driver } from '../../model/Driver';
import { IDriversRepository } from '../../repositories/IDriversRepository';

class ListByIdDriverUseCase {
    constructor(private driversRepository : IDriversRepository){}

    execute({ id }) : Driver {
        const driver = this.driversRepository.listById({id});

        return driver;
    }
}

export { ListByIdDriverUseCase }