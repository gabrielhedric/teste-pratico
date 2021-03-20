import { IAutomobilesRepository, ICreateAutomobileDTO } from '../../repositories/IAutomobilesRepositoryDTO';
import { Automobile } from '../../model/Automobile';


class UpdateAutomobileUseCase {
    constructor( private automobilesRepository: IAutomobilesRepository ){}

    execute({ id, license_plate, color, brand} : ICreateAutomobileDTO) : Automobile {
        
    const updateAutomobile = this.automobilesRepository.update({id, license_plate, color, brand});

    return updateAutomobile;
        
    }
}

export { UpdateAutomobileUseCase }