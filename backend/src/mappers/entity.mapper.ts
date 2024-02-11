import { BaseEntity } from "../entities/Base.entity";

// TODO: Can interface be used for static class?
export interface EntityMappere<E extends BaseEntity, D> {

    toDto(entity: E): D;

    toEntity(dto: D): E;
}
