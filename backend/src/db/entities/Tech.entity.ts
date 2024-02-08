import { Entity, Column, ManyToMany } from "typeorm"
import { BaseEntity } from "./BaseEntity.entity";
import { TechState } from "../../enums/TechState.enum";
import { TechCategory } from "../../enums/TechCategory.enum";
import { Project } from "./Project.entity";

@Entity()
export class Tech extends BaseEntity {

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

    @ManyToMany(() => Project, (project: Project) => project.techs)
    projects: Project[]
}
