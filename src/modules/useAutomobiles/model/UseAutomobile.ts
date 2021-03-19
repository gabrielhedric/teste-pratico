import { Automobile } from '../../automobiles/model/Automobile';
import { Driver } from '../../drivers/model/Driver';

import { v4 as uuidV4 } from 'uuid';

class UseAutomobile {
    id: string;
    start_use: Date;
    end_use: Date;
    driver: Driver; 
    automobile: Automobile; 
    reason_use: string; 

    // Responsabilidade de criação do id único 
    constructor() {
        if(!this.id) {
            this.id = uuidV4();
        }
    }
}

export { UseAutomobile };