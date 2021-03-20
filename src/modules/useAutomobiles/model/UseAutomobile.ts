import { v4 as uuidV4 } from "uuid";

class UseAutomobile {
    id: string;
    startUse: Date;
    endUse?: Date;
    driverID: string;
    license_plate: string;
    reasonUse: string;

    constructor() {
        if(!this.id) {
            this.id = uuidV4();
        }
    }
}

export { UseAutomobile }