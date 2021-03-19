import { DriversRepository } from '../../repositories/DriversRepository';
import { DeleteDriverController } from "./DeleteDriverController";
import { DeleteDriverUseCase } from "./DeleteDriverUseCase";

const driverRepository = DriversRepository.getInstance();
const deleteDriverUseCase = new DeleteDriverUseCase(driverRepository);
const deleteDriverController = new DeleteDriverController(deleteDriverUseCase);

export { deleteDriverController };