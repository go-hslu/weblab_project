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

        const cto = new UserEntity();
        cto.email = "cto@hslu.ch";
        cto.role = UserRole.CTO;
        cto.passwordHash = "$2b$05$Q1GNGcVKnV4e3matau8iteJc76HjpykuxylXNKA3RfXJOJF/Q1Pra";

        const user = new UserEntity();
        user.email = "user@hslu.ch";
        user.role = UserRole.USER;
        user.passwordHash = "$2b$05$awOf5crrbUsF9gNNu30NDORfFN87C0CAFOrw3cgcPE7f77zOl4pR2";

        await userRepository.save([admin, user, cto]);


        /* Tech seeding */
        const angular = new TechEntity();
        angular.name = "Angular";
        angular.nameIdentifier = "angular";
        angular.category = TechCategory.FRAMEWORK;
        angular.state = TechState.ADOPT;
        angular.description = "Angular ist ein TypeScript-basiertes Front-End-Webapplikationsframework. Es wird von einer Community aus Einzelpersonen und Unternehmen, angeführt durch Google, entwickelt und als Open-Source-Software publiziert.";
        angular.publication = new Date();
        angular.createdBy = admin;
        angular.updatedBy = admin;

        const typeScript = new TechEntity();
        typeScript.name = "TypeScript";
        typeScript.nameIdentifier = "typescript";
        typeScript.category = TechCategory.LANGUAGE;
        typeScript.state = TechState.ADOPT;
        typeScript.description = "TypeScript ist eine von Microsoft entwickelte Skriptsprache, die auf den Vorschlägen zum ECMAScript-6-Standard basiert und statische Typisierung zu JavaScript hinzufügt. Sprachkonstrukte von TypeScript, wie Klassen, Vererbung, Module und anonyme Funktionen, wurden auch in ECMAScript 6 übernommen.";
        typeScript.publication = new Date();
        typeScript.createdBy = admin;
        typeScript.updatedBy = admin;

        const svelte = new TechEntity();
        svelte.name = "Svelte";
        svelte.nameIdentifier = "svelte";
        svelte.category = TechCategory.FRAMEWORK;
        svelte.state = TechState.TRIAL;
        svelte.description = "Svelte ist eine freie JavaScript-Softwarebibliothek, die ein Grundgerüst für die Ausgabe von User-Interface-Komponenten von Webseiten zur Verfügung stellt (Webframework). Mit Svelte lassen sich reaktive Single-Page-Webanwendungen erstellen.";
        svelte.publication = new Date();
        svelte.createdBy = admin;
        svelte.updatedBy = admin;

        const copilot = new TechEntity();
        copilot.name = "GitHub Copilot";
        copilot.nameIdentifier = "github-copilot";
        copilot.category = TechCategory.TOOL;
        copilot.state = TechState.TRIAL;
        copilot.description = "GitHub Copilot ist ein KI-basiertes Tool, das in verschiedenen IDEs zur Autovervollständigung von Quelltext verwendet werden kann. Es basiert auf einem Sprachmodell names Codex, das von OpenAI entwickelt wurde und eine Variante des Modells GPT-3 ist.";
        copilot.createdBy = admin;
        copilot.updatedBy = admin;

        const chatGpt = new TechEntity();
        chatGpt.name = "ChatGPT";
        chatGpt.nameIdentifier = "chatgpt";
        chatGpt.category = TechCategory.TOOL;
        chatGpt.state = TechState.TRIAL;
        chatGpt.description = "ChatGPT (von englisch to chat „plaudern“; Generative Pre-trained Transformer) ist ein Chatbot, der künstliche Intelligenz einsetzt, um mit Nutzern über textbasierte Nachrichten und Bilder zu kommunizieren. Entwickelt wurde der Chatbot von OpenAI.";
        chatGpt.createdBy = admin;
        chatGpt.updatedBy = admin;

        const azure = new TechEntity();
        azure.name = "Microsoft Azure";
        azure.nameIdentifier = "microsoft-azure";
        azure.category = TechCategory.PLATFORM;
        azure.state = TechState.ADOPT;
        azure.description = "Microsoft Azure ist eine Cloud-Computing-Plattform mit Diensten wie SQL Azure oder AppFabric. Die Nutzer von Microsoft Azure setzen Infrastructure as a Service (IaaS), Platform as a Service (PaaS) und Software as a Service (SaaS) ein.";
        azure.createdBy = admin;
        azure.updatedBy = admin;

        const devOps = new TechEntity();
        devOps.name = "DevOps";
        devOps.nameIdentifier = "devops";
        devOps.category = TechCategory.TECHNIQUE;
        devOps.state = TechState.ADOPT;
        devOps.description = "DevOps ist eine Sammlung unterschiedlicher technischer Methoden und eine Kultur zur Zusammenarbeit zwischen Softwareentwicklung und IT-Betrieb. Mit DevOps sollen die Softwarequalität, die Geschwindigkeit der Entwicklung und der Auslieferung, sowie das Miteinander der beteiligten Teams verbessert werden.";
        devOps.createdBy = admin;
        devOps.updatedBy = admin;

        await techRepository.save([angular, typeScript, svelte, copilot, chatGpt, azure, devOps]);


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

        await logRepository.save([log1, log2]);

        [angular, typeScript, svelte, copilot, chatGpt, azure, devOps].forEach(tech => {

            const log = new LogEntity();
            log.message = `Tech '${tech.name}' created!`;
            log.triggerAction = LogTriggerAction.ALTER;
            log.triggeredBy = admin;

        });
    }
}
