import { IDriversRepository } from '../../repositories/IDriversRepository';

class DeleteDriverUseCase {
    constructor(private driversRepository : IDriversRepository){}

    execute({ id }) : void {
        this.driversRepository.delete({id});
    }
}

export { DeleteDriverUseCase };