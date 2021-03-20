import { Automobile } from '../../model/Automobile';
import { IAutomobilesRepository } from '../../repositories/IAutomobilesRepositoryDTO';

class ListByIdAutomobileUseCase {
    constructor (private automobilesRepository: IAutomobilesRepository){}

    execute(id: string) : Automobile {
        const automobile = this.automobilesRepository.listById({id});

        return automobile;
    }
}

export { ListByIdAutomobileUseCase };