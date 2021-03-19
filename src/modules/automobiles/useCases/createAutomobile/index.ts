import { CreateAutomobileUseCase } from "./CreateAutomobileUseCase";
import { AutomobilesRepository } from '../../repositories/AutomobilesRepository'
import { CreateAutomobileController } from "./CreateAutomobileController";

const automobilesRepository = AutomobilesRepository.getInstance();

const createAutomobileUseCase = new CreateAutomobileUseCase(automobilesRepository);

const createAutomobileController = new CreateAutomobileController(createAutomobileUseCase);

export { createAutomobileController };