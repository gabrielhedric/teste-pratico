import { IDriversRepository } from '../../repositories/IDriversRepository'
import { Driver } from '../../model/Driver';


class ListAllDriversUseCase {
    constructor(private driversRepository : IDriversRepository){}

    execute() : Driver[] {
        const drivers = this.driversRepository.list()

        return drivers;
    }
}

export { ListAllDriversUseCase }