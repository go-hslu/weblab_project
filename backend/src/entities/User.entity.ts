import { Column, Entity } from "typeorm";
import { BaseEntity } from "./Base.entity";
import { UserRole } from "../dto/user/UserRole.enum";
import { IsEmail } from "class-validator";

@Entity("user")
export class UserEntity extends BaseEntity {

    @Column({
        type: "varchar",
        length: 32,
        unique: true
    })
    @IsEmail()
    email: string;

    @Column({
        type: "varchar",
        length: 128
    })
    passwordHash: string;

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.USER,
    })
    role: UserRole;
}
