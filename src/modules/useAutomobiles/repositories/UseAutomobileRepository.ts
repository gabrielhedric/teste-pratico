import { ICreateUseAutomobileDTO } from './IUseAutomobileRepository';
import { UseAutomobile } from '../model/UseAutomobile';
import { DriversRepository } from '../../drivers/repositories/DriversRepository';
import { AutomobilesRepository } from '../../automobiles/repositories/AutomobilesRepository';

class UseAutomobileRepository {
    public useAutomobiles: UseAutomobile[];

    public static INSTANCE: UseAutomobileRepository;

    public constructor() {
        this.useAutomobiles = [];
    }

    public static getInstance(): UseAutomobileRepository{
        if(!UseAutomobileRepository.INSTANCE) {
            UseAutomobileRepository.INSTANCE = new UseAutomobileRepository();
        }
        return UseAutomobileRepository.INSTANCE;
    }

    create({id, license_plate, reasonUse }: ICreateUseAutomobileDTO ) {
        const useAutomobiles = new UseAutomobile();

        const automobile = AutomobilesRepository.getInstance().listById({id})

        Object.assign(automobile,{
            license_plate,
            id,
            reasonUse,
            startUse: new Date()
        });
    }

}

export { UseAutomobileRepository };