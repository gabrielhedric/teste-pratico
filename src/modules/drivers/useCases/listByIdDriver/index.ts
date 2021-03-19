import { DriversRepository } from '../../repositories/DriversRepository';

import { ListByIdDriverController } from "./ListByIdDriverController";
import { ListByIdDriverUseCase } from "./ListByIdDriverUseCase";

const driversRepository = DriversRepository.getInstance();

const listByIdDriverUseCase = new ListByIdDriverUseCase(driversRepository);
const listByIdDriverController = new ListByIdDriverController(listByIdDriverUseCase);

export { listByIdDriverController };