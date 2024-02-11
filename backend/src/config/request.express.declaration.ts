import { JwtUserDto } from "../dto/user/JwtUser.dto";

declare global {
    namespace Express {
        export interface Request {
            user?: JwtUserDto;
        }
    }
}

export {};
