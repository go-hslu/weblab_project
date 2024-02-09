import { UserRole } from "@shared/enums/UserRole.enum";

export interface User {
    token: string;
    email: string;
    role: UserRole;
}
