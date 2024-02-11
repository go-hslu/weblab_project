import { Request, Response}  from "express";
import { TechService } from "../services/tech.service";
import { TechEntity } from "../entities/Tech.entity";
import { hasUserTechRole } from "../utils/authorization.util";

export class TechController {

    async getTechs(req: Request, res: Response) {

        if (req.user && hasUserTechRole(req.user.role)) {
            const techs: TechEntity[] = await TechService.getAll();
            return res.json(techs);
        }

        const techs: TechEntity[] = await TechService.getAllPublished();
        return res.json(techs);
    }

    async getTechByName(req: Request, res: Response) {
        const tech: TechEntity|null = await TechService.getByName(req.params.id);

        if (!tech) {
            return res.status(404).send(`No tech with name '${req.params.id}' found!`);
        }

        // TODO: Use tech dto, hide user data except email
        tech.createdBy.passwordHash = "TEST TEST";
        return res.json(tech);
    }
}
