import { Automobile } from "../model/Automobile";

interface ICreateAutomobile {
    license_plate: string;
    color: string;
    brand: string;
    id?: string;
}

interface IAutomobilesRepository {
    list(): Automobile[];
    create({license_plate, color, brand}: ICreateAutomobile) : void;
    update({ id, license_plate, color, brand} : ICreateAutomobile);
    delete({ id }) : void;
    listById({ id });
    findyByLicensePlate(id: string) : Automobile;
}

export { IAutomobilesRepository, ICreateAutomobile };