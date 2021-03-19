import { CreateUseAutomobileController } from './CreateUseAutomobileController';
import { CreateUseAutomobileUseCase } from './CreateUseAutomobileUseCase';
import { UseAutomobileRepository } from '../../repositories/UseAutomobileRepository';

const useAutomobileRepository = UseAutomobileRepository.getInstance();

const createUseAutomobileUseCase = new CreateUseAutomobileUseCase(useAutomobileRepository);
const createUseAutomobileController = new CreateUseAutomobileController(createUseAutomobileUseCase);

export { createUseAutomobileController }; 