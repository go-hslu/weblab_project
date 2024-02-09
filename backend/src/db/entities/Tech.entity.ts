import { Entity, Column } from "typeorm"
import { BaseEntity } from "./Base.entity";
import { TechState } from "../../enums/TechState.enum";
import { TechCategory } from "../../enums/TechCategory.enum";

@Entity("tech")
export class TechEntity extends BaseEntity {

    @Column({
        type: "varchar",
        length: 64,
        unique: true
    })
    name: string;

    @Column({
        type: "enum",
        enum: TechState,
        default: TechState.HOLD,
    })
    state: TechState;

    @Column({
        type: "enum",
        enum: TechCategory,
        default: TechCategory.FRAMEWORK,
    })
    category: TechCategory;
}
