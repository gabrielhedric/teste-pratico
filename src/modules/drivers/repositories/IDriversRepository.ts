import { Driver } from "../model/Driver";


interface ICreateDriver {
    name: string;
    id?: string;
}

interface IDriversRepository {
    list(): Driver[];
    create({name}: ICreateDriver) : void;
    update({ name} : ICreateDriver);
    delete({ id }) : void;
    listById({ id }) : Driver;
}

export { IDriversRepository, ICreateDriver };

