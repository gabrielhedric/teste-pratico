import { CreateDriverController } from "./CreateDriverController";
import { CreateDriverUseCase } from "./CreateDriverUseCase";
import { DriversRepository } from '../../repositories/DriversRepository'

const driversRepository = DriversRepository.getInstance();

const createDriverUseCase = new CreateDriverUseCase(driversRepository);
const createDriverController = new CreateDriverController(createDriverUseCase);

export { createDriverController };