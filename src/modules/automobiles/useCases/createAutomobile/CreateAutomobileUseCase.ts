import { IAutomobilesRepository } from '../../repositories/IAutomobilesRepositoryDTO';

interface IRequest {
    license_plate: string;
    color: string;
    brand: string;
}

class CreateAutomobileUseCase {
    constructor( private automobilesRepository: IAutomobilesRepository ){}

    execute({ license_plate, color, brand }: IRequest) : void{
    
    const automobilieAlreadyExists = this.automobilesRepository.findyByLicensePlate(license_plate);

    if (automobilieAlreadyExists) {
        throw new Error('Automobile already exists!');
    }

    this.automobilesRepository.create({license_plate, color, brand});
    }
}

export { CreateAutomobileUseCase };