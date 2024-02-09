import {UserRole} from "../enums/UserRole.enum";

export const isUserRoleAuthorized = (userRole: UserRole, permittedRoles: UserRole[]): boolean => {
    if (userRole == UserRole.ADMIN)
        return true;

    return permittedRoles.includes(userRole);
};

