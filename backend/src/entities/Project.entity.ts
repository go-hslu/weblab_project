import { Column, Entity, JoinTable, ManyToMany } from "typeorm";
import { BaseEntity } from "./Base.entity";
import { ProjectState } from "../dto/project/ProjectState.enum";
import { TechEntity } from "./Tech.entity";

@Entity("project")
export class ProjectEntity extends BaseEntity {

    @Column({
        type: "varchar",
        length: 32,
        unique: true
    })
    name: string;

    @Column({
        type: "enum",
        enum: ProjectState,
        default: ProjectState.PROPOSED,
    })
    state: ProjectState;

    @ManyToMany(() => TechEntity)
    @JoinTable()
    techs: TechEntity[];
}
