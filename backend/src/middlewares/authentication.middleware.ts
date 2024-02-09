import { NextFunction, Request, Response } from "express";
import jwt, { JsonWebTokenError, JwtPayload, NotBeforeError, TokenExpiredError } from "jsonwebtoken";
import { env_secret } from "../constants/env.constant";

type VerifyError = JsonWebTokenError | NotBeforeError | TokenExpiredError | null;
type JwtDecodedPayload = JwtPayload | string | undefined;

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {

    const authHeader = req.header("Authorization");

    if (!authHeader)  {
        return res.status(403).send("Access denied: No authorization token provided!");
    }

    if (!authHeader.startsWith("Bearer ")) {
        return res.status(401).send("Unauthorized: Authorization token 'Bearer' prefix missing!");
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(token, env_secret, (error: VerifyError, decodedPayload: JwtDecodedPayload) => {

        if (error) {
            return res.status(401).send("Unauthorized: Authorization token is invalid!");
        }

        console.log((decodedPayload as JwtPayload).email);

        req.user = { email: (decodedPayload as JwtPayload).email, role: (decodedPayload as JwtPayload).role };
        next();
    });
};
