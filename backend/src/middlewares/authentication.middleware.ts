import { NextFunction, Request, Response } from "express";
import jwt, { JsonWebTokenError, JwtPayload, NotBeforeError, TokenExpiredError } from "jsonwebtoken";
import { ENV_SECRET } from "../config/env.constant";

type VerifyError = JsonWebTokenError | NotBeforeError | TokenExpiredError | null;
type JwtDecodedPayload = JwtPayload | string | undefined;

export async function authenticate(req: Request, res: Response, next: NextFunction): Promise<any> {

    const authHeader = req.header("Authorization");

    if (!authHeader) {
        return res.status(401).send("Unauthorized: No authorization token provided!");
    }

    if (!authHeader.startsWith("Bearer ")) {
        return res.status(401).send("Unauthorized: Authorization token 'Bearer' prefix missing!");
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(token, ENV_SECRET, (error: VerifyError, decodedPayload: JwtDecodedPayload) => {

        if (error) {
            return res.status(401).send("Unauthorized: Invalid authorization token!");
        }

        req.user = {
            email: (decodedPayload as JwtPayload).email,
            role: (decodedPayload as JwtPayload).role
        };

        return next();
    });
}

export async function optionalAuthenticate(req: Request, res: Response, next: NextFunction): Promise<any> {

    const authHeader = req.header("Authorization");

    if (!authHeader) {
        return next();
    }

    if (!authHeader.startsWith("Bearer ")) {
        return next();
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(token, ENV_SECRET, (error: VerifyError, decodedPayload: JwtDecodedPayload) => {

        if (error) {
            return next();
        }

        req.user = {
            email: (decodedPayload as JwtPayload).email,
            role: (decodedPayload as JwtPayload).role
        };

        return next();
    });
}
