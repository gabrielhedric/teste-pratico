import { IAutomobilesRepository, ICreateAutomobileDTO } from '../../repositories/IAutomobilesRepositoryDTO';

class UpdateAutomobileUseCase {
    constructor( private automobilesRepository: IAutomobilesRepository ){}

    execute({ id, license_plate, color, brand} : ICreateAutomobileDTO){
        
        this.automobilesRepository.update({id, license_plate, color, brand});
        
    }
}

export { UpdateAutomobileUseCase }