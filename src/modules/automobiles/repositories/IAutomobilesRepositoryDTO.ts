import { Automobile } from "../model/Automobile";

interface ICreateAutomobileDTO {
    license_plate: string;
    color: string;
    brand: string;
    id?: string;
}

interface IAutomobilesRepository {
    list(): Automobile[];
    create({license_plate, color, brand}: ICreateAutomobileDTO) : Automobile;
    update({ id, license_plate, color, brand} : ICreateAutomobileDTO);
    delete({ id }) : void;
    listById({ id });
    findyByLicensePlate(id: string) : Automobile;
}

export { IAutomobilesRepository, ICreateAutomobileDTO };