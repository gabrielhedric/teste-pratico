import { UseAutomobile } from '../../model/UseAutomobile';
import { UseAutomobileRepository } from '../../repositories/UseAutomobileRepository';

class ListRegisterAutomobileUseCase {
    constructor(private useAutomobileRepository : UseAutomobileRepository ){}

    execute() : UseAutomobile[] {
        const drivers = this.useAutomobileRepository.list()

        return drivers;
    }

}

export { ListRegisterAutomobileUseCase }