import { DataSource } from "typeorm";
import { TechEntity } from "./entities/Tech.entity";
import { TechCategory } from "../enums/TechCategory.enum";
import { TechState } from "../enums/TechState.enum";
import { UserEntity } from "./entities/User.entity";
import { ProjectEntity } from "./entities/Project.entity";
import { ProjectState } from "../enums/ProjectState.enum";
import { UserRole } from "../enums/UserRole.enum";
import { LogEntity } from "./entities/Log.entity";
import { LogTriggerAction } from "../enums/LogTriggerAction.enum";

export async function seed(dataSource: DataSource) {

    const userRepository = dataSource.getRepository(UserEntity);
    const techRepository = dataSource.getRepository(TechEntity);

    const savedTechsCount = (await techRepository.find()).length;
    const savedUsersCount = (await userRepository.find()).length;

    if (savedTechsCount == 0 && savedUsersCount == 0) {
        console.log("No techs or users found, seeding database!");

        const projectRepository = dataSource.getRepository(ProjectEntity);
        const logRepository = dataSource.getRepository(LogEntity);

        /* Tech seeding */
        const angular = new TechEntity();
        angular.name = "Angular";
        angular.category = TechCategory.FRAMEWORK;
        angular.state = TechState.ADOPT;

        const typeScript = new TechEntity();
        typeScript.name = "TypeScript";
        typeScript.category = TechCategory.LANGUAGE;
        typeScript.state = TechState.ADOPT;

        const svelte = new TechEntity();
        svelte.name = "Svelte";
        svelte.category = TechCategory.FRAMEWORK;
        svelte.state = TechState.TRIAL;

        await techRepository.save([angular, typeScript, svelte]);


        /* Project seeding */
        const radar = new ProjectEntity();
        radar.name = "WEBLAB Radar";
        radar.state = ProjectState.LIVE;
        radar.techs = [angular, typeScript];

        await projectRepository.save(radar);


        /* User seeding */
        const admin = new UserEntity();
        admin.email = "admin@hslu.ch";
        admin.role = UserRole.ADMIN;
        admin.password = "1234";

        const user = new UserEntity();
        user.email = "user@hslu.ch";
        user.role = UserRole.USER;
        user.password = "1234";

        await userRepository.save([admin, user]);


        /* Log seeding */
        const log1 = new LogEntity();
        log1.message = "Registered user (admin@hslu.ch)";
        log1.triggerAction = LogTriggerAction.REGISTER;
        log1.triggeredBy = admin;

        const log2 = new LogEntity();
        log2.message = "Registered user (user@hslu.ch)";
        log2.triggerAction = LogTriggerAction.REGISTER;
        log2.triggeredBy = user;

        const log3 = new LogEntity();
        log3.message = "UPSERT tech (Angular)";
        log3.triggerAction = LogTriggerAction.ALTER;
        log3.triggeredBy = admin;

        const log4 = new LogEntity();
        log4.message = "UPSERT tech (TypeScript)";
        log4.triggerAction = LogTriggerAction.ALTER;
        log4.triggeredBy = admin;

        const log5 = new LogEntity();
        log5.message = "UPSERT tech (Svelte)";
        log5.triggerAction = LogTriggerAction.ALTER;
        log5.triggeredBy = admin;

        const log6 = new LogEntity();
        log6.message = "UPSERT tech (WEBLAB Radar)";
        log6.triggerAction = LogTriggerAction.ALTER;
        log6.triggeredBy = admin;

        await logRepository.save([log1, log2, log3, log4, log5, log6]);
    }
}
