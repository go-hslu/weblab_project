import { NextFunction, Request, Response } from "express";
import { isUserGranted } from "../utils/authorization.util";
import { UserRole } from "../dto/user/UserRole.enum";

export const authorize = (permittedRoles: UserRole[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {

        if (!req.user || !req.user.role) {
            return res.status(401).send("Unauthorized: User not logged in!");
        }

        const role: UserRole = req.user.role;

        if (!isUserGranted(role, permittedRoles)) {
            return res.status(403).send(`Forbidden: Access denied for role ${role}!`);
        }

        next();
    };
};

export const authorizeTechRoles = authorize([UserRole.TECH_LEAD, UserRole.CTO])

export const authorizeAdmin = authorize([UserRole.ADMIN]);
