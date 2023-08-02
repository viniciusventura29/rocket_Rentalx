import fs from "fs";
import { parse as csvParse } from "csv-parse";

import { CategoryRepository } from "../../repositories/implementations/CategoriesRespository";

interface IImportCategory {
    name;
    description;
}

const categories = [];

class ImportCategoryUseCase {
    constructor(private categoryRepository: CategoryRepository) {}

    loadCatergories(file: Express.Multer.File): Promise<IImportCategory[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);

            const parseFile = csvParse();

            stream.pipe(parseFile);

            parseFile
                .on("data", async (line) => {
                    const [name, description] = line;

                    categories.push({
                        name,
                        description,
                    });
                })
                .on("end", () => {
                    fs.promises.unlink(file.path);
                    resolve(categories);
                })
                .on("error", (err) => {
                    reject(err);
                });
        });
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCatergories(file);

        categories.map(async (category) => {
            const { name, description } = category;

            const existCategory = this.categoryRepository.findByName(name);

            if (!existCategory) {
                this.categoryRepository.create({
                    name,
                    description,
                });
            }
        });
    }
}

export { ImportCategoryUseCase };
