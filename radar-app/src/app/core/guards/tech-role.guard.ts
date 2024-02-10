import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from "@angular/router";
import { inject } from "@angular/core";

import { AuthService } from "@core/services/auth.service";
import { User } from "@shared/types/user/User.model";
import { UserRole } from "@shared/types/user/UserRole.enum";

export const techRoleGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const authService: AuthService = inject(AuthService);
    return authUserHasTechRole(authService);
}

export function hasTechRole(role: UserRole): boolean {
    return (role == UserRole.TECH_LEAD ||
        role == UserRole.CTO ||
        role == UserRole.ADMIN);
}

export function authUserHasTechRole(authService: AuthService): boolean {
    const authenticatedUser: User|null = authService.authenticatedUser.getValue();
    if (!authenticatedUser)
        return false;

    return hasTechRole(authenticatedUser.role);
}
