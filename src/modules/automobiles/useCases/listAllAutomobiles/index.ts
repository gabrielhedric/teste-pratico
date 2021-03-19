import { AutomobilesRepository } from "../../repositories/AutomobilesRepository";
import { ListAllAutomobilesController } from "./ListAllAutomobilesController";
import { ListAllAutomobilesUseCase } from "./ListAllAutomobilesUseCase";

const automobilesRepository = AutomobilesRepository.getInstance();
const listAllAutomobilesUseCase = new ListAllAutomobilesUseCase(automobilesRepository);
const listAllAutomobilesController = new ListAllAutomobilesController(listAllAutomobilesUseCase);

export {listAllAutomobilesController};
