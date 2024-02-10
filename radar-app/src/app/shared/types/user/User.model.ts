import { UserRole } from "@shared/types/user/UserRole.enum";

export interface User {
    token: string;
    email: string;
    role: UserRole;
}
