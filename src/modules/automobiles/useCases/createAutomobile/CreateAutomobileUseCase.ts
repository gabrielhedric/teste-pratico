import { IAutomobilesRepository } from '../../repositories/IAutomobilesRepositoryDTO';
import { Automobile } from '../../model/Automobile';

interface IRequest {
    license_plate: string;
    color: string;
    brand: string;
}

class CreateAutomobileUseCase {
    constructor( private automobilesRepository: IAutomobilesRepository ){}

    execute({ license_plate, color, brand }: IRequest) : Automobile{

    const automobile = this.automobilesRepository.create({license_plate, color, brand});

    return automobile;
    }
}

export { CreateAutomobileUseCase };