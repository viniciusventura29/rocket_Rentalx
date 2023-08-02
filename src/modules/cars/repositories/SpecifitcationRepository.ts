import { Specification } from "../entities/Specification";
import {
    ISpecificationRepository,
    ICreateSpecificationDTO,
} from "./ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
    private specifications: Specification[];

    private static INSTANCE;

    constructor() {
        this.specifications = [];
    }

    public static getInstance() {
        if (!SpecificationRepository.INSTANCE) {
            this.INSTANCE = new SpecificationRepository();
        }

        return SpecificationRepository.INSTANCE;
    }

    findByName(name: string) {
        const specification = this.specifications.find(
            (specification) => specification.name === name
        );

        return specification;
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        });

        this.specifications.push(specification);
    }
}

export { SpecificationRepository };
