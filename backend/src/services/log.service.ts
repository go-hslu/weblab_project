import { AppDataSource }  from "../config/data-source";
import { LogEntity } from "../entities/Log.entity";
import { LogTriggerAction } from "../dto/log/LogTriggerAction.enum";
import { UserEntity } from "../entities/User.entity";
import { UserService } from "./user.service";

export class LogService {

    public static getAll(): Promise<LogEntity[]> {
        return AppDataSource.getRepository(LogEntity).find();
    }

    public static getById(id: string): Promise<LogEntity|null> {
        return AppDataSource.getRepository(LogEntity).findOneBy( {
            id: id
        });
    }

    public static upsert(entity: LogEntity): Promise<LogEntity|null> {
        console.log(`[${entity.triggerAction}] ${entity.message}`);
        return AppDataSource.getRepository(LogEntity).save(entity);
    }

    public static log(triggerAction: LogTriggerAction, message: string, triggeredBy: UserEntity): Promise<LogEntity|null> {
        const log: LogEntity = new LogEntity();
        log.message = message;
        log.triggerAction = triggerAction;
        log.triggeredBy = triggeredBy;

        return LogService.upsert(log);
    }

    public static async logByEmail(triggerAction: LogTriggerAction, message: string, triggeredByEmail: string): Promise<LogEntity|null> {

        const user: UserEntity|null = await UserService.getByEmail(triggeredByEmail);
        if (user) {
            return LogService.log(triggerAction, message, user);
        }

        return null;
    }
}
