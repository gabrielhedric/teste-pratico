import { Automobile } from '../model/Automobile';
import { ICreateAutomobileDTO } from './IAutomobilesRepositoryDTO';

class AutomobilesRepository {
    
    public automobiles: Automobile[];

    public static INSTANCE: AutomobilesRepository;

    public constructor() {
        this.automobiles = [];
    }

    public static getInstance(): AutomobilesRepository{
        if(!AutomobilesRepository.INSTANCE) {
            AutomobilesRepository.INSTANCE = new AutomobilesRepository();
        }
        return AutomobilesRepository.INSTANCE;
    }

    create({ license_plate, color, brand } : ICreateAutomobileDTO ) : Automobile {
        const automobile = new Automobile(); 
    
        Object.assign(automobile, {
            license_plate,
            color,
            brand,
            created_at: new Date(),
        });
        
        this.automobiles.push(automobile);

        return automobile;

    }

    list(): Automobile[] {
        return this.automobiles;
    }

    update({ id, license_plate, color, brand} : ICreateAutomobileDTO ) : Automobile {

        const automobile = this.automobiles.find(automobile => automobile.id === id);

        Object.assign(automobile, {
            license_plate,
            color,
            brand,
            created_at: new Date(),
        });

        return automobile;
    }

    delete({ id } ) : void {
        const automobile = this.automobiles.findIndex(automobile => automobile.id === id);

        this.automobiles.splice(automobile[1]);
    }

    listById({ id }) : Automobile {
        const automobile = this.automobiles.find(automobile => automobile.id === id);

        return automobile;
    }

    findById({id}) : Automobile {
        const automobile = this.automobiles.find(automobile => automobile.id === id);

        return automobile;
    }

    findyByLicensePlate(license_plate: string) : Automobile {
        const automobile = this.automobiles.find(automobile => automobile.license_plate === license_plate);
        return automobile;
    }
}

export { AutomobilesRepository }