import { UserEntity } from "../entities/User.entity";
import { DeleteResult } from "typeorm";
import { AppDataSource } from "../config/data-source";

export class UserService {

    public static getAll(): Promise<UserEntity[]> {
        return AppDataSource.getRepository(UserEntity).find();
    }

    public static getById(id: string): Promise<UserEntity|null> {
        return AppDataSource.getRepository(UserEntity).findOneBy( {
            id: id
        });
    }

    public static getByEmail(email: string): Promise<UserEntity|null> {
        return AppDataSource.getRepository(UserEntity).findOneBy( {
            email: email
        });
    }

    public static upsert(entity: UserEntity): Promise<UserEntity|null> {
        return AppDataSource.getRepository(UserEntity).save(entity);
    }

    public static delete(id: string): Promise<DeleteResult> {
        return AppDataSource.getRepository(UserEntity).delete(id);
    }
}
