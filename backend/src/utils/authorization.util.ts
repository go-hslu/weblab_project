import { UserRole } from "../dto/user/UserRole.enum";

export function isUserGranted(userRole: UserRole, permittedRoles: UserRole[] = []): boolean {
    if (userRole == UserRole.ADMIN)
        return true;

    return permittedRoles.includes(userRole);
}

export function hasUserTechRole(userRole: UserRole): boolean {
    return isUserGranted(userRole, [UserRole.TECH_LEAD, UserRole.CTO]);
}
