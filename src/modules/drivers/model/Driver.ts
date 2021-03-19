import { v4 as uuidV4 } from "uuid";

class Driver {

    id?: string;
    name: string;
    created_at: Date;

    // Responsabilidade de criação do id único 
    constructor() {
        if(!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Driver };