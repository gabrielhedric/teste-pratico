import { Automobile } from '../../model/Automobile';
import { IAutomobilesRepository } from '../../repositories/IAutomobilesRepository';


class ListAllAutomobilesUseCase {
    constructor (private automobilesRepository: IAutomobilesRepository){}

    execute(): Automobile[] {
        const automobiles = this.automobilesRepository.list();

        return automobiles;
    }
}

export { ListAllAutomobilesUseCase };