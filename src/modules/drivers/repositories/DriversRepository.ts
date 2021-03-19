import { response } from 'express';
import { Driver } from '../model/Driver';
import { ICreateDriver } from '../repositories/IDriversRepository';


class DriversRepository {
    
    private drivers: Driver[];

    private static INSTANCE: DriversRepository;

    private constructor() {
        this.drivers = [];
    }

    public static getInstance(): DriversRepository{
        if(!DriversRepository.INSTANCE) {
            DriversRepository.INSTANCE = new DriversRepository();
        }
        return DriversRepository.INSTANCE;
    }

    create({ name } : ICreateDriver ): void  {
        const driver = new Driver(); 
    
        Object.assign(driver, {
            name,
            created_at: new Date(),
        });
    
        this.drivers.push(driver);
    }

    list(): Driver[] {
        return this.drivers;
    }

    update({ id, name } : ICreateDriver ){

        const driver = this.drivers.find(driver => driver.id === id);

        Object.assign(driver, {
            name,
            created_at: new Date(),
        });
    }

    delete({ id } ) : void {
        const driver = this.drivers.findIndex(automobile => automobile.id === id);

        this.drivers.splice(driver[1]);
    }

    listById({ id }){
        const driver = this.drivers.find(automobile => automobile.id === id);

        return driver;
    }
}

export { DriversRepository }