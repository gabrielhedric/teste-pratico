import { AutomobilesRepository } from "../../repositories/AutomobilesRepository";
import { ListByIdAutomobileController } from "./ListByIdAutomobileController";
import { ListByIdAutomobileUseCase } from "./ListByIdAutomobileUseCase";

const automobilesRepository = AutomobilesRepository.getInstance();

const listByIdAutomobileUseCase = new ListByIdAutomobileUseCase(automobilesRepository);
const listByIdAutomobileController = new ListByIdAutomobileController(listByIdAutomobileUseCase);

export { listByIdAutomobileController };