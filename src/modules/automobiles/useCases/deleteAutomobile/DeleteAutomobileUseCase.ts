import { IAutomobilesRepository } from '../../repositories/IAutomobilesRepositoryDTO';

class DeleteAutomobileUseCase {
    constructor (private automobilesRepository: IAutomobilesRepository){}

    execute({ id } ) : void{

    this.automobilesRepository.delete({id});
    }
}

export { DeleteAutomobileUseCase };