import { DeleteResult, IsNull, Not } from "typeorm";
import { AppDataSource } from "../config/data-source";
import { TechEntity } from "../entities/Tech.entity";

export class TechService {

    public static getAll(): Promise<TechEntity[]> {
        return AppDataSource.getRepository(TechEntity).find();
    }

    public static getAllPublished(): Promise<TechEntity[]> {
        return AppDataSource.getRepository(TechEntity).find({
            relations: ["createdBy"],
            where: {
                publication: Not(IsNull())
            }
        });
    }

    public static getById(id: string): Promise<TechEntity|null> {
        return AppDataSource.getRepository(TechEntity).findOne( {
            relations: ["createdBy"],
            where: {
                id: id
            }
        });
    }

    public static getByName(name: string): Promise<TechEntity|null> {
        return AppDataSource.getRepository(TechEntity).findOne( {
            relations: ["createdBy"],
            where: {
                name: name
            }
        });
    }

    public static getByNameIdentifier(nameIdentifier: string): Promise<TechEntity|null> {
        return AppDataSource.getRepository(TechEntity).findOne( {
            relations: ["createdBy"],
            where: {
                nameIdentifier: nameIdentifier
            }
        });
    }

    public static publish(entity: TechEntity): Promise<TechEntity|null> {
        entity.publication = new Date();
        return AppDataSource.getRepository(TechEntity).save(entity);
    }

    public static upsert(entity: TechEntity): Promise<TechEntity|null> {
        return AppDataSource.getRepository(TechEntity).save(entity);
    }

    public static delete(id: string): Promise<DeleteResult> {
        return AppDataSource.getRepository(TechEntity).delete(id);
    }
}
