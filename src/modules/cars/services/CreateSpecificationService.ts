import { ISpecificationRepository } from "../repositories/ISpecificationRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationService {
    constructor(private SpecificationsRepository: ISpecificationRepository) {}

    execute({ name, description }: IRequest): void {
        const specificationNameAlreadyExists =
            this.SpecificationsRepository.findByName(name);

        if (specificationNameAlreadyExists) {
            throw new Error("Specification already exists!");
        }

        this.SpecificationsRepository.create({
            name,
            description,
        });
    }
}

export { CreateSpecificationService };
