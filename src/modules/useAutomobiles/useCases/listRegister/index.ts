import { UseAutomobileRepository } from "../../repositories/UseAutomobileRepository";
import { ListRegisterAutomobileController } from "./listRegisterAutomobileController";
import { ListRegisterAutomobileUseCase } from "./listRegisterAutomobileUseCase";

const useAutomobileRepository = UseAutomobileRepository.getInstance();

const listRegisterAutomobileUseCase = new ListRegisterAutomobileUseCase(useAutomobileRepository);
const listRegisterAutomobileController = new ListRegisterAutomobileController(listRegisterAutomobileUseCase);

export { listRegisterAutomobileController };