import { IAutomobilesRepository, ICreateAutomobile } from '../../repositories/IAutomobilesRepository';

class UpdateAutomobileUseCase {
    constructor( private automobilesRepository: IAutomobilesRepository ){}

    execute({ id, license_plate, color, brand} : ICreateAutomobile){
        
        this.automobilesRepository.update({id, license_plate, color, brand});
        
    }
}

export { UpdateAutomobileUseCase }