import { UserRole } from "./UserRole.enum";

export interface JwtUserDto {
    email: string;
    role: UserRole;
}
