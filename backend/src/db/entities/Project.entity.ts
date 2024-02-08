import { Column, Entity, JoinTable, ManyToMany } from "typeorm";
import { BaseEntity } from "./BaseEntity.entity";
import { ProjectState } from "../../enums/ProjectState.enum";
import { Tech } from "./Tech.entity";

@Entity()
export class Project extends BaseEntity {

    @Column({
        type: "varchar",
        length: 64,
        unique: true
    })
    name: string;

    @Column({
        type: "enum",
        enum: ProjectState,
        default: ProjectState.PROPOSED,
    })
    state: ProjectState;

    @ManyToMany(() => Tech, (tech: Tech) => tech.projects)
    @JoinTable()
    techs: Tech[]
}
