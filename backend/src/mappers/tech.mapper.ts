import { TechEntity } from "../entities/Tech.entity";
import { TechDto } from "../dto/tech/Tech.dto";

export class TechMapper {
    public static toDto(entity: TechEntity): TechDto {
        return {
            id: entity.id,
            name: entity.name,
            nameIdentifier: entity.nameIdentifier,
            category: entity.category,
            state: entity.state,
            description: entity.description,
            createdOn: entity.createdOn,
            createdBy: entity.createdBy.email,
            publication: entity.publication
        }
    }
}
