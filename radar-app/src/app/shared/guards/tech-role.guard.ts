import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from "@angular/router";
import { inject, Injectable } from "@angular/core";
import { AuthService } from "@shared/services/auth.service";
import { User } from "@shared/models/user.model";
import { UserRole } from "@shared/enums/UserRole.enum";

@Injectable({
    providedIn: "root"
})
class AuthorizationService {
    hasTechRole(): boolean {
        const authService: AuthService = inject(AuthService);
        return authUserHasTechRole(authService);
    }
}

export const techRoleGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return inject(AuthorizationService).hasTechRole();
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
