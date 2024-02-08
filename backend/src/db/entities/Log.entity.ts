import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { BaseEntity } from "./BaseEntity.entity";
import { User } from "./User.entity";
import { LogTriggerAction } from "../../enums/LogTriggerAction.enum";
import { IsDate } from "class-validator";

@Entity()
export class Log extends BaseEntity {

    @Column({
        type: "varchar",
        length: 256
    })
    message: string;

    @Column({
        type: "enum",
        enum: LogTriggerAction
    })
    triggerAction: LogTriggerAction;

    @OneToOne(() => User)
    @JoinColumn()
    triggeredBy: User

    @Column()
    @IsDate()
    triggeredOn: Date
}
