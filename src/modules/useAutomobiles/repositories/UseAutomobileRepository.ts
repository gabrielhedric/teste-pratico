import { ICreateUseAutomobileDTO } from './IUseAutomobileRepository';
import { UseAutomobile } from '../model/UseAutomobile';

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

    create({driverID, license_plate, reasonUse }: ICreateUseAutomobileDTO ) : UseAutomobile {
        const useAutomobiles = new UseAutomobile();

        const currentCar = this.useAutomobiles.find(useAutomobile => useAutomobile.license_plate === license_plate && !useAutomobile.endUse);
        
        if(currentCar) {
            throw new Error( ' This license is associated with another driver ');
        }

        const currentDriver = this.useAutomobiles.find(useAutomobile => useAutomobile.license_plate === license_plate && !useAutomobile.endUse);

        if(currentDriver) {
            throw new Error( 'This license is associated with another driver');
        }
        

        Object.assign(useAutomobiles,{
            license_plate,
            driverID,
            reasonUse,
            startUse: new Date()
        });

        this.useAutomobiles.push(useAutomobiles);

        return useAutomobiles;
    }

    list(): UseAutomobile[] {
        return this.useAutomobiles;
    }

    endUse(useAutomobileID) {
        const currentUseAutomobile = this.useAutomobiles.findIndex(useAutomobile => useAutomobile.id === useAutomobileID && !useAutomobile.endUse);
        
        if(currentUseAutomobile !== -1 ) {
            this.useAutomobiles[currentUseAutomobile].endUse = new Date();
        }

    }


}

export { UseAutomobileRepository };