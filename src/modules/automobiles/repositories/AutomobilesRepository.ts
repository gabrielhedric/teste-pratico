import { Automobile } from '../model/Automobile';
import { ICreateAutomobile, IAutomobilesRepository } from '../repositories/IAutomobilesRepository';

class AutomobilesRepository {
    
    private automobiles: Automobile[];

    private static INSTANCE: AutomobilesRepository;

    private constructor() {
        this.automobiles = [];
    }

    public static getInstance(): AutomobilesRepository{
        if(!AutomobilesRepository.INSTANCE) {
            AutomobilesRepository.INSTANCE = new AutomobilesRepository();
        }
        return AutomobilesRepository.INSTANCE;
    }

    create({ license_plate, color, brand } : ICreateAutomobile ): void  {
        const automobile = new Automobile(); 
    
        Object.assign(automobile, {
            license_plate,
            color,
            brand,
            created_at: new Date(),
        });
        
        this.automobiles.push(automobile);
    }

    list(): Automobile[] {
        return this.automobiles;
    }

    update({ id, license_plate, color, brand} : ICreateAutomobile ){

        const automobile = this.automobiles.find(automobile => automobile.id === id);

        Object.assign(automobile, {
            license_plate,
            color,
            brand,
            created_at: new Date(),
        });
    }

    delete({ id } ) : void {
        const automobile = this.automobiles.findIndex(automobile => automobile.id === id);

        this.automobiles.splice(automobile[1]);
    }

    listById({ id }){
        const automobile = this.automobiles.find(automobile => automobile.id === id);

        return automobile;
    }

    // Validação de criação para não criar o mesmo automóvel, buscando pela placa
    findyByLicensePlate(license_plate: string) : Automobile {
        const automobile = this.automobiles.find(automobile => automobile.license_plate === license_plate);
        return automobile;
    }
}

export { AutomobilesRepository }