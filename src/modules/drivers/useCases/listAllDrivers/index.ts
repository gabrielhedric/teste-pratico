import { DriversRepository } from '../../repositories/DriversRepository';
import { ListAllDriversController } from "./ListAllDriversController";
import { ListAllDriversUseCase } from "./ListAllDriversUseCase";

const driversRepository = DriversRepository.getInstance();

const listAllDriversUseCase = new ListAllDriversUseCase(driversRepository);
const listAllDriversController = new ListAllDriversController(listAllDriversUseCase);

export { listAllDriversController };