import { UserRole } from "@shared/enums/UserRole.enum";

export interface User {
    id: string;
    email: string;
    role: UserRole;
    token: string;
}
