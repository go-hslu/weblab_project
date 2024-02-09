import { Column, CreateDateColumn, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "./Base.entity";
import { UserEntity } from "./User.entity";
import { LogTriggerAction } from "../../enums/LogTriggerAction.enum";

@Entity("log")
export class LogEntity extends BaseEntity {

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

    @ManyToOne(() => UserEntity)
    triggeredBy: UserEntity;

    @CreateDateColumn()
    triggeredOn: Date;
}
