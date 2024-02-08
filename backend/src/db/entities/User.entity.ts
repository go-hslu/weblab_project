import { Column, Entity } from "typeorm";
import { BaseEntity } from "./BaseEntity.entity";
import { UserRole } from "../../enums/UserRole.enum";
import { IsEmail } from "class-validator";

@Entity()
export class User extends BaseEntity {

    @Column({
        type: "varchar",
        length: 64,
        unique: true
    })
    @IsEmail()
    email: string;

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.USER,
    })
    role: UserRole;
}
