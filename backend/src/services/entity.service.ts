import { BaseEntity } from "../entities/Base.entity";
import { DeleteResult } from "typeorm";

// TODO: Can interface be used for static class?
export interface EntityService<T extends BaseEntity> {

    getAll(): Promise<T[]>;

    getById(id: string): Promise<T|null>;

    upsert(entity: T): Promise<T|null>;

    delete(id: string): Promise<DeleteResult>;
}
