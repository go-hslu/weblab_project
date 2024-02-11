import { DataSource } from "typeorm";
import { TechEntity } from "../entities/Tech.entity";
import { TechCategory } from "../dto/tech/TechCategory.enum";
import { TechState } from "../dto/tech/TechState.enum";
import { UserEntity } from "../entities/User.entity";
import { ProjectEntity } from "../entities/Project.entity";
import { ProjectState } from "../dto/project/ProjectState.enum";
import { UserRole } from "../dto/user/UserRole.enum";
import { LogEntity } from "../entities/Log.entity";
import { LogTriggerAction } from "../dto/log/LogTriggerAction.enum";

export async function seedDatabase(dataSource: DataSource) {

    const userRepository = dataSource.getRepository(UserEntity);
    const techRepository = dataSource.getRepository(TechEntity);

    const savedTechsCount = (await techRepository.find()).length;
    const savedUsersCount = (await userRepository.find()).length;

    if (savedTechsCount == 0 && savedUsersCount == 0) {
        console.log("No techs or users found, seeding database!");

        const projectRepository = dataSource.getRepository(ProjectEntity);
        const logRepository = dataSource.getRepository(LogEntity);

        /* User seeding */
        const admin = new UserEntity();
        admin.email = "admin@hslu.ch";
        admin.role = UserRole.ADMIN;
        admin.passwordHash = "$2b$05$4kveCkvwmHpQ3IdTrkTfYeCmXb/M3mskHcVOoVF5LjpA836fbkvCi";

        const user = new UserEntity();
        user.email = "user@hslu.ch";
        user.role = UserRole.USER;
        user.passwordHash = "$2b$05$awOf5crrbUsF9gNNu30NDORfFN87C0CAFOrw3cgcPE7f77zOl4pR2";

        await userRepository.save([admin, user]);


        /* Tech seeding */
        const angular = new TechEntity();
        angular.name = "Angular";
        angular.category = TechCategory.FRAMEWORK;
        angular.state = TechState.ADOPT;
        angular.description = "Angular ist ein TypeScript-basiertes Front-End-Webapplikationsframework. Es wird von einer Community aus Einzelpersonen und Unternehmen, angeführt durch Google, entwickelt und als Open-Source-Software publiziert.";
        angular.publication = new Date();
        angular.createdBy = admin;

        const typeScript = new TechEntity();
        typeScript.name = "TypeScript";
        typeScript.category = TechCategory.LANGUAGE;
        typeScript.state = TechState.ADOPT;
        typeScript.description = "TypeScript ist eine von Microsoft entwickelte Skriptsprache, die auf den Vorschlägen zum ECMAScript-6-Standard basiert und statische Typisierung zu JavaScript hinzufügt. Sprachkonstrukte von TypeScript, wie Klassen, Vererbung, Module und anonyme Funktionen, wurden auch in ECMAScript 6 übernommen.";
        typeScript.publication = new Date();
        typeScript.createdBy = admin;

        const svelte = new TechEntity();
        svelte.name = "Svelte";
        svelte.category = TechCategory.FRAMEWORK;
        svelte.state = TechState.TRIAL;
        svelte.description = "Svelte ist eine freie JavaScript-Softwarebibliothek, die ein Grundgerüst für die Ausgabe von User-Interface-Komponenten von Webseiten zur Verfügung stellt (Webframework). Mit Svelte lassen sich reaktive Single-Page-Webanwendungen erstellen.";
        svelte.publication = new Date();
        svelte.createdBy = admin;

        const copilot = new TechEntity();
        copilot.name = "GitHub_Copilot";
        copilot.category = TechCategory.TOOL;
        copilot.state = TechState.TRIAL;
        copilot.description = "GitHub Copilot ist ein KI-basiertes Tool, das in verschiedenen IDEs zur Autovervollständigung von Quelltext verwendet werden kann. Es basiert auf einem Sprachmodell names Codex, das von OpenAI entwickelt wurde und eine Variante des Modells GPT-3 ist.";
        copilot.createdBy = admin;

        await techRepository.save([angular, typeScript, svelte, copilot]);


        /* Project seeding */
        const radar = new ProjectEntity();
        radar.name = "WEBLAB Radar";
        radar.state = ProjectState.LIVE;
        radar.techs = [angular, typeScript];

        await projectRepository.save(radar);


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
