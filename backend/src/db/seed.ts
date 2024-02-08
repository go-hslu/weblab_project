import { DataSource } from "typeorm";
import { Tech } from "./entities/Tech.entity";

export async function seed(dataSource: DataSource) {
    const techRepository = dataSource.getRepository(Tech);
    const savedTechsCount = (await techRepository.find()).length;

    if (savedTechsCount < 1) {
        console.log("No techs found, seeding database!");

        const tech1 = new Tech();
        tech1.name = "Angular";

        const tech2 = new Tech();
        tech2.name = "TypeORM";

        await techRepository.save(tech1);
        await techRepository.save(tech2);
    }
}
