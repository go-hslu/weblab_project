import { Entity, Column, CreateDateColumn, ManyToOne, UpdateDateColumn } from "typeorm";
import { BaseEntity } from "./Base.entity";
import { TechState } from "../dto/tech/TechState.enum";
import { TechCategory } from "../dto/tech/TechCategory.enum";
import { UserEntity } from "./User.entity";

@Entity("tech")
export class TechEntity extends BaseEntity {

    @Column({
        type: "varchar",
        length: 32,
        unique: true
    })
    name: string;

    @Column({
        type: "varchar",
        length: 32,
        unique: true
    })
    nameIdentifier: string;

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

    @Column({
        type: "varchar",
        length: 512,
        default: ""
    })
    description: string;

    @CreateDateColumn()
    createdOn: Date;

    @ManyToOne(() => UserEntity)
    createdBy: UserEntity;

    @UpdateDateColumn()
    updatedOn: Date;

    @ManyToOne(() => UserEntity)
    updatedBy: UserEntity;

    @Column({
        type: "datetime",
        nullable: true,
        default: null,
    })
    publication: Date;
}
