import { UserRole } from "../enums/UserRole.enum";

export interface JwtUserPayload {
    email: string;
    role: UserRole;
}
