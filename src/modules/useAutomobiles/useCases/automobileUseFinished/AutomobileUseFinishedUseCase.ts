
import { UseAutomobileRepository } from '../../repositories/UseAutomobileRepository';


class AutomobileUseFinishedCase {
    constructor(private useAutomobileRepository: UseAutomobileRepository){}

    execute(useMobileID) {
    
    this.useAutomobileRepository.endUse(useMobileID);
    }
}

export { AutomobileUseFinishedCase };