import { DeleteAutomobileController } from "./DeleteAutomobileController";
import { DeleteAutomobileUseCase } from "./DeleteAutomobileUseCase";
import { AutomobilesRepository } from '../../repositories/AutomobilesRepository'

const automobilesRepository = AutomobilesRepository.getInstance();
const deleteAutomobileUseCase = new DeleteAutomobileUseCase(automobilesRepository);
const deleteAutomobileController = new DeleteAutomobileController(deleteAutomobileUseCase);

export { deleteAutomobileController };

