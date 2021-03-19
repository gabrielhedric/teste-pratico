import { DriversRepository } from '../../repositories/DriversRepository';
import { UpdateDriverController } from "./UpdateDriverController";
import { UpdateDriverUseCase } from "./UpdateDriverUseCase";

const driversRepository = DriversRepository.getInstance();

const updateDriverUseCase = new UpdateDriverUseCase(driversRepository);
const updateDriverController = new UpdateDriverController(updateDriverUseCase);

export { updateDriverController };