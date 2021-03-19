import { IUseAutomobileRepository } from '../../repositories/IUseAutomobileRepository';

interface IRequest {
    driverUse: string,
    carUse: string,
    reasonUse: string,
    license_plate: string;
}

class CreateUseAutomobileUseCase {
    constructor(private useAutomobileRepository : IUseAutomobileRepository){}

    execute({driverUse, carUse, reasonUse }: IRequest ) : void {

        this.useAutomobileRepository.create(driverUse, carUse, reasonUse);
    }
}

export { CreateUseAutomobileUseCase }