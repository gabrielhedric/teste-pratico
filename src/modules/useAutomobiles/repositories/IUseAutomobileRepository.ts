import { UseAutomobile } from '../model/UseAutomobile';
import { Automobile } from '../../automobiles/model/Automobile';
import { Driver } from '../../drivers/model/Driver';

interface ICreateUseAutomobile {
    id: string;
    start_use: Date;
    end_use: Date;
    driver: Driver; 
    automobile: Automobile;
    reason_use: string; 
}

interface IUseAutomobileRepository {

}

export { IUseAutomobileRepository, ICreateUseAutomobile }