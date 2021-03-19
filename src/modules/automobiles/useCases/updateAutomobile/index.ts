import { AutomobilesRepository } from "../../repositories/AutomobilesRepository";
import { UpdateAutomobileController } from "./UpdateAutomobileController";
import { UpdateAutomobileUseCase } from "./UpdateAutomobileUseCase";

const automobilesRepository = AutomobilesRepository.getInstance();

const updateAutomobileUseCase = new UpdateAutomobileUseCase(automobilesRepository);

const updateAutomobileController = new UpdateAutomobileController(updateAutomobileUseCase);

export { updateAutomobileController }