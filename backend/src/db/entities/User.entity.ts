import { Column, Entity } from "typeorm";
import { BaseEntity } from "./Base.entity";
import { UserRole } from "../../enums/UserRole.enum";
import { IsEmail } from "class-validator";

@Entity("user")
export class UserEntity extends BaseEntity {

    @Column({
        type: "varchar",
        length: 64,
        unique: true
    })
    @IsEmail()
    email: string;

    @Column({
        type: "varchar",
        length: 256
    })
    password: string;

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.USER,
    })
    role: UserRole;
}
