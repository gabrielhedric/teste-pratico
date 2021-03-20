import { AutomobileUseFinishedController } from "./AutomobileUseFinishedController";
import { AutomobileUseFinishedCase } from "./AutomobileUseFinishedUseCase";

import { UseAutomobileRepository } from '../../repositories/UseAutomobileRepository';

const useAutomobileRepository = UseAutomobileRepository.getInstance();


const automobileUseFinishedUseCase = new AutomobileUseFinishedCase(useAutomobileRepository)
const automobileUseFinishedContoller = new AutomobileUseFinishedController(automobileUseFinishedUseCase);

export { automobileUseFinishedContoller }; 