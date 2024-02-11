import { Request, Response } from "express";

import { TechEntity } from "../entities/Tech.entity";
import { LogTriggerAction } from "../dto/log/LogTriggerAction.enum";

import { hasUserTechRole } from "../utils/authorization.util";
import { LogService } from "../services/log.service";
import { TechService } from "../services/tech.service";
import { TechMapper } from "../mappers/tech.mapper";
import { trainCaseTransform } from "../utils/transform";

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

        if (!req.body) {
            return res.status(400).send("Bad Request: Invalid arguments!");
        }

        let tech: TechEntity|null = await TechService.getById(req.params.id);
        let create: boolean = false;

        if (!tech) {
            create = true;
            tech = new TechEntity();
        }

        tech.name = req.body.name;
        tech.nameIdentifier = trainCaseTransform(req.body.name);
        tech.category = req.body.category;
        tech.state = req.body.state;
        tech.description = req.body.description;

        if (!req.user) {
            return res.status(500).send("Internal Server Error: Unexpected behavior occurred!");
        }

        await TechService.upsert(tech);
        await LogService.logByEmail(LogTriggerAction.ALTER, `Tech '${tech.name}' ${create ? 'created' : 'updated'}!`, req.user.email);

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
