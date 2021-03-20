import { UseAutomobileRepository } from '../../repositories/UseAutomobileRepository';
import { UseAutomobile } from '../../model/UseAutomobile';

interface IRequest {
    driverID: string,
    reasonUse: string,
    license_plate: string;
}

class CreateUseAutomobileUseCase {
    constructor(private useAutomobileRepository : UseAutomobileRepository ){}

    execute({license_plate, driverID, reasonUse }: IRequest ) : UseAutomobile {

    const createUseAutomobile = this.useAutomobileRepository.create({driverID, license_plate, reasonUse});
    
    return createUseAutomobile;

    }
}

export { CreateUseAutomobileUseCase }