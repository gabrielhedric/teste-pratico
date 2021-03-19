import { v4 as uuidV4 } from "uuid";

class Automobile {

    id: string;
    license_plate: string;
    color: string;
    brand: string;
    created_at: Date;

    // Responsabilidade de criação do id único 
    constructor() {
        if(!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Automobile };