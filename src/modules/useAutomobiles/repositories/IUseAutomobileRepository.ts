import { Automobile } from '../../automobiles/model/Automobile';
import { Driver } from '../../drivers/model/Driver';
import { UseAutomobile } from '../model/UseAutomobile';

interface ICreateUseAutomobileDTO {
    license_plate: Automobile;
    id: Driver;
    reasonUse: string,
    startUse: Date,
    endUse: Date
}

//Contrato
interface IUseAutomobileRepository{
    findByLicensePlate(license_plate: string) : Automobile;
    findById(id: string): Driver;
    list(): UseAutomobile[];
    create(driverUse: string, carUse: string, reasonUse:string): UseAutomobile;
}

export { IUseAutomobileRepository, ICreateUseAutomobileDTO };