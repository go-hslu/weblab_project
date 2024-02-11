import { Request, Response } from "express";

import { TechMapper } from "../mappers/tech.mapper";
import { UserEntity } from "../entities/User.entity";
import { TechEntity } from "../entities/Tech.entity";
import { LogTriggerAction } from "../dto/log/LogTriggerAction.enum";

import { hasUserTechRole } from "../utils/authorization.util";
import { trainCaseTransform } from "../utils/transform";

import { LogService } from "../services/log.service";
import { TechService } from "../services/tech.service";
import { UserService } from "../services/user.service";

export class TechController {

    public static async getTechs(req: Request, res: Response): Promise<any> {

        if (req.user && hasUserTechRole(req.user.role)) {
            const techs: TechEntity[] = await TechService.getAll();
            return res.json(techs);
        }

        const techs: TechEntity[] = await TechService.getAllPublished();
        return res.json(techs);
    }

    public static async getTechByName(req: Request, res: Response): Promise<any>  {
        const tech: TechEntity|null = await TechService.getByNameIdentifier(req.params.id);

        if (!tech) {
            return res.status(404).send(`Not Found: No tech with name '${req.params.id}' found!`);
        }

        return res.json(TechMapper.toDto(tech));
    }

    public static async upsertTech(req: Request, res: Response): Promise<any>  {

        if (!req.body || !req.user) {
            return res.status(400).send("Bad Request: Invalid arguments!");
        }

        const user: UserEntity|null = await UserService.getByEmail(req.user.email);

        if (!user) {
            return res.status(400).send("Bad Request: Invalid arguments!");
        }

        let addNewTech: boolean = true;
        let tech: TechEntity|null = null;

        if (req.body.id) {
            tech = await TechService.getById(req.body.id);

            if (!tech) {
                return res.status(400).send("Bad Request: Invalid arguments!");
            }

            addNewTech = false;
        }

        if (addNewTech || !tech) {
            tech = new TechEntity();
            tech.createdBy = user;
        }

        tech.name = req.body.name;
        tech.category = req.body.category;
        tech.state = req.body.state;
        tech.description = req.body.description;

        tech.nameIdentifier = trainCaseTransform(req.body.name);
        tech.updatedBy = user;

        if (!req.user) {
            return res.status(500).send("Internal Server Error: Unexpected behavior occurred!");
        }

        tech = await TechService.upsert(tech);

        if (!tech) {
            return res.status(500).send("Internal Server Error: Unexpected behavior occurred!");
        }

        await LogService.logByEmail(LogTriggerAction.ALTER, `Tech '${tech.name}' ${addNewTech ? 'created' : 'updated'}!`, req.user.email);

        tech = await TechService.getById(tech.id);

        // TODO: Remove these terrible null checks
        if (!tech) {
            return res.status(500).send("Internal Server Error: Unexpected behavior occurred!");
        }

        return res.json(TechMapper.toDto(tech));
    }

    public static async publishTechByName(req: Request, res: Response): Promise<any>  {
        let tech: TechEntity|null = await TechService.getByNameIdentifier(req.params.id);

        if (!tech) {
            return res.status(404).send(`Not Found: No tech with name '${req.params.id}' found!`);
        }

        tech = await TechService.publish(tech);
        if (!tech || !req.user) {
            return res.status(500).send("Internal Server Error: Unexpected behavior occurred!");
        }

        await LogService.logByEmail(LogTriggerAction.ALTER, `Tech '${tech.name}' published!`, req.user.email);

        return res.json(TechMapper.toDto(tech));
    }

    public static async deleteTechByName(req: Request, res: Response): Promise<any>  {
        const tech: TechEntity|null = await TechService.getByNameIdentifier(req.params.id);

        if (!tech) {
            return res.status(404).send(`Not Found: No tech with name '${req.params.id}' found!`);
        }

        if (!req.user) {
            return res.status(500).send("Internal Server Error: Unexpected behavior occurred!");
        }

        await TechService.delete(tech.id);
        await LogService.logByEmail(LogTriggerAction.REMOVAL, `Tech '${tech.name}' deleted!`, req.user.email);

        return res.json(TechMapper.toDto(tech));
    }
}
