import { UseAutomobile } from '../model/UseAutomobile';

class UseAutomobileRepository {
    private useAutomobile: UseAutomobile[];

    private static INSTANCE: UseAutomobileRepository;

    private constructor() {
        this.useAutomobile = [];
    }

    public static getInstance(): UseAutomobileRepository{
        if(!UseAutomobileRepository.INSTANCE) {
            UseAutomobileRepository.INSTANCE = new UseAutomobileRepository();
        }
        return UseAutomobileRepository.INSTANCE;
    }

}

export { UseAutomobileRepository };