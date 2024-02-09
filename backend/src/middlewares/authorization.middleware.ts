import { NextFunction, Request, Response } from "express";
import { isUserRoleAuthorized } from "../utils/authorization.util";
import { UserRole } from "../enums/UserRole.enum";

export const authorizeTechRoles = (req: Request, res: Response, next: NextFunction) => {


    if (!req.user || !req.user.role) {
        return res.status(403).send("Access denied: User not logged in!");
    }

    const role: UserRole = req.user.role;

    if (!isUserRoleAuthorized(role, [UserRole.TECH_LEAD, UserRole.CTO])) {
        return res.status(403).send(`Access denied for role ${role}!`);
    } else {
        next();
    }
};

